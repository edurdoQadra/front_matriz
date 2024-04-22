<!-- <template>
  <div>
    <h2>Detalles del Cliente</h2>
    <div v-if="client">
      <p><strong>ID:</strong> {{ client.Id }}</p>
      <p><strong>Nombre:</strong> {{ client.Name }}</p>
      <p><strong>Apellido:</strong> {{ client.Surname }}</p>
      <p><strong>Correo:</strong> {{ client.Correo }}</p>
      <!-- Agrega más campos según tus necesidades -->
    </div>
    <router-link to="/clients">Volver a la lista de clientes</router-link>
  </div>

  <div>
    <!--  -->
    <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 flex justify-end dark:text-blue-400" role="alert">
        <!--  -->
        <form class="max-w-md flex justify-content-start">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative flex justify-between items-center w-full">
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
        <!--  -->
        <button @click="openModal" type="button" class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-3 h-3 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
            </svg>
            Agregar cliente
        </button>
        <!--  -->
    </div>
</div>

</template>

<script>
import { defineComponent } from 'vue';
import { useClientesStore } from '../store/store'; // Importa tu store
import { useRoute } from 'vue-router'; // Importa useRoute de Vue Router

export default defineComponent({
  name: 'ClienteDetails',
  setup() {
    const store = useClientesStore(); // Usa el store de clientes

    // Obtén el ID del cliente de la ruta
    const route = useRoute();
    const clientId = route.params.id;

    // Usa el método del store para obtener los detalles del cliente
    const client = store.fetchCliente(clientId);

    return { client };
  }
});
</script>

<!-- <script>
import { defineComponent, ref, onMounted } from 'vue';
import { useClientesStore } from '../store/store';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt';
//-------------------------------------------------------------------------------------------------------//
                      // variables y definimos el componente  //
//-------------------------------------------------------------------------------------------------------//
export default defineComponent({
  name: 'ClientesList',
  setup() {
    const store = useClientesStore();
    const clients = ref([]);
    const formData = ref({
      username: '',
      name: '',
      surname: '',
      mobile: '',
      correo: '',
    });
    
//-------------------------------------------------------------------------------------------------------//
                      // Funciones para controlar el modal  //
//-------------------------------------------------------------------------------------------------------//

    const isModalOpen = ref(false);
    const openModal = () => {
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
//-------------------------------------------------------------------------------------------------------//
                      // Funciones para pintar datos en la vista//
//-------------------------------------------------------------------------------------------------------//
    onMounted(async () => {
      clients.value = await store.fetchClientes();
    });


    $('#myTable').DataTable({
  searching: true, // Habilitar la funcionalidad de búsqueda
  paging: true, // Habilitar la paginación
  // Otras opciones que desees configurar...
});




//-------------------------------------------------------------------------------------------------------//
                      // Funciones para pintar datos en la vista//
//-------------------------------------------------------------------------------------------------------//

    const submitForm = async (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        console.log(formData.value);
        await store.createCliente(formData.value);
        //await store.fetchClientes(); // Actualiza la lista de clientes después de crear uno nuevo
        closeModal();
      };
//-------------------------------------------------------------------------------------------------------//
                      // Funciones para editar un registro//
//-------------------------------------------------------------------------------------------------------//


//-------------------------------------------------------------------------------------------------------//
                      // Funciones para ver un registro//
//-------------------------------------------------------------------------------------------------------//

    // onMounted(async () => {
    //   clients.value = await store.fetchClientes();
    //   console.log(clients.value);
      
    //   if (clients.value.length > 0) {
    // $('#myTable').DataTable({
    //       // Configuración de DataTable
    //       // searching: true,
    //       // paging: true,
    //       // Otras opciones que desees configurar...
    //     });
    //   }
    // });

//     onMounted(async () => {
//   clients.value = await store.fetchClientes(); // Obtener la matriz de clientes

//   const tableBody = document.querySelector('#myTable tbody');

//   // Limpiar cualquier contenido previo en la tabla
//   tableBody.innerHTML = '';

//   // Iterar sobre la matriz de clientes
//   clients.value.forEach(client => {
//     const row = document.createElement('tr');

//     // Crear celdas para cada propiedad del cliente
//     const usernameCell = document.createElement('td');
//     usernameCell.textContent = client.Username;
//     row.appendChild(usernameCell);

//     const surnameCell = document.createElement('td');
//     surnameCell.textContent = client.Surname;
//     row.appendChild(surnameCell);

//     const correoCell = document.createElement('td');
//     correoCell.textContent = client.Correo;
//     row.appendChild(correoCell);

//     // Añadir la fila a la tabla
//     tableBody.appendChild(row);
//   });

//   // Después de imprimir los datos, puedes inicializar DataTable
//   $('#myTable').DataTable({
//     searching: true,
//     paging: true,
//     // Otras opciones que desees configurar...
//   });
// });

// onMounted(async () => {
//   const fetchedClients = await store.fetchClientes(); // Obtener la matriz de clientes
//   if (Array.isArray(fetchedClients)) {
//     clients.value = fetchedClients;

//     const tableBody = document.querySelector('#myTable tbody');

//     // Limpiar cualquier contenido previo en la tabla
//     tableBody.innerHTML = '';

//     // Iterar sobre la matriz de clientes
//     clients.value.forEach(client => {
//       const row = document.createElement('tr');

//       // Crear celdas para cada propiedad del cliente
//       const usernameCell = document.createElement('td');
//       usernameCell.textContent = client.Username;
//       row.appendChild(usernameCell);

//       const surnameCell = document.createElement('td');
//       surnameCell.textContent = client.Surname;
//       row.appendChild(surnameCell);

//       const correoCell = document.createElement('td');
//       correoCell.textContent = client.Correo;
//       row.appendChild(correoCell);

//       // Añadir la fila a la tabla
//       tableBody.appendChild(row);
//     });

//     // Después de imprimir los datos, puedes inicializar DataTable
//     $('#myTable').DataTable({
//       searching: true,
//       paging: true,
//       // Otras opciones que desees configurar...
//     });
//   } else {
//     console.error('Los datos de los clientes no son una matriz:', fetchedClients);
//   }
// });

// onMounted(async () => {
//   const fetchedData = await store.fetchClientes(); // Obtener los datos
//   let fetchedClients = [];
//   console.log('Datos recibidos:', fetchedData); // Agrega esta línea para depuración


//   try {
//     const parsedData = JSON.parse(fetchedData);
//     fetchedClients = parsedData.clients;
//   } catch (error) {
//     console.error('Error al analizar los datos:', error);
//   }

//   // Ahora fetchedClients debería ser una matriz que puedes utilizar
//   console.log(fetchedClients);
//   // Limpiar cualquier contenido previo en la tabla
//   const tableBody = document.querySelector('#myTable tbody');
//   tableBody.innerHTML = '';

//   // Iterar sobre la matriz de clientes
//   clients.value.forEach(client => {
//     const row = document.createElement('tr');

//     // Crear celdas para cada propiedad del cliente
//     const usernameCell = document.createElement('td');
//     usernameCell.textContent = client.Username;
//     row.appendChild(usernameCell);

//     const surnameCell = document.createElement('td');
//     surnameCell.textContent = client.Surname;
//     row.appendChild(surnameCell);

//     const correoCell = document.createElement('td');
//     correoCell.textContent = client.Correo;
//     row.appendChild(correoCell);

//     // Añadir la fila a la tabla
//     tableBody.appendChild(row);
//   });

//   // Después de imprimir los datos, puedes inicializar DataTable
//   $('#myTable').DataTable({
//     searching: true,
//     paging: true,
//     // Otras opciones que desees configurar...
//   });
// });

// onMounted(async () => {
//   const fetchedData = await store.fetchClientes(); // Obtener los datos
//   let fetchedClients = [];
//   console.log('Datos recibidos:', fetchedData); // Agrega esta línea para depuración

//   try {
//     const parsedData = JSON.parse(fetchedData);
//     fetchedClients = parsedData.clients;
//   } catch (error) {
//     console.error('Error al analizar los datos:', error);
//   }

//   // Ahora fetchedClients debería ser una matriz que puedes utilizar
//   console.log(fetchedClients);
  
//   // Limpiar cualquier contenido previo en la tabla
//   const tableBody = document.querySelector('#myTable tbody');
//   tableBody.innerHTML = '';

//   // Iterar sobre la matriz de clientes
//   fetchedClients.forEach(client => {
//     const row = document.createElement('tr');

//     // Crear celdas para cada propiedad del cliente
//     const usernameCell = document.createElement('td');
//     usernameCell.textContent = client.Username;
//     row.appendChild(usernameCell);

//     const surnameCell = document.createElement('td');
//     surnameCell.textContent = client.Surname;
//     row.appendChild(surnameCell);

//     const correoCell = document.createElement('td');
//     correoCell.textContent = client.Correo;
//     row.appendChild(correoCell);

//     // Añadir la fila a la tabla
//     tableBody.appendChild(row);
//   });

//   // Después de imprimir los datos, puedes inicializar DataTable
//   $('#myTable').DataTable({
//     searching: true,
//     paging: true,
//     // Otras opciones que desees configurar...
//   });
// });

const fetchedData = await store.fetchClientes(); // Obtener los datos
let fetchedClients = [];

if (typeof fetchedData === 'string') {
  try {
    const parsedData = JSON.parse(fetchedData);
    fetchedClients = parsedData.clients;
  } catch (error) {
    console.error('Error al analizar los datos:', error);
  }
} else {
  console.error('Los datos recibidos no son una cadena JSON:', fetchedData);
}


      <!-- <table id="myTable" class="table-auto min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th class="px-4 py-2 bg-gray-100 border border-gray-300">Nombre</th>
            <th class="px-4 py-2 bg-gray-100 border border-gray-300">Apellido</th>
            <th class="px-4 py-2 bg-gray-100 border border-gray-300">Correo Electrónico</th>
            <th class="px-4 py-2 bg-gray-100 border border-gray-300">Acciones</th>
            <th class="px-4 py-2 bg-gray-100 border border-gray-300">Apellido</th>
            <th class="px-4 py-2 bg-gray-100 border border-gray-300">Correo Electrónico</th>
            <th class="px-4 py-2 bg-gray-100 border border-gray-300">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clients.clients" :key="client.Id">
            <td class="px-4 py-2 border border-gray-300">{{ client.Username }}</td>
            <td class="px-4 py-2 border border-gray-300">{{ client.Surname }}</td>
            <td class="px-4 py-2 border border-gray-300">{{ client.Correo }}</td>
            <td class="px-4 py-2 border border-gray-300">{{ client.Id }}</td>
            <td class="px-4 py-2 border border-gray-300">{{ client.Mobile }}</td>
            <td class="px-4 py-2 border border-gray-300">{{ client.Status }}</td>
            <td class="px-4 py-2 border border-gray-300  text-center">
              <button class="px-2  py-1 bg-blue-500 text-white rounded hover:bg-blue-600" @click="verCliente(client)">
                Ver
              </button>
              <button class="px-2 mx-2 py-1 bg-green-500 text-white rounded hover:bg-green-600" @click="editarCliente(client)">
                Editar
              </button>
              <button class="px-2  py-1 bg-red-500 text-white rounded hover:bg-red-600" @click="borrarCliente(client)">
                Borrar
              </button>
            </td>
          </tr>
        </tbody>
      </table> -->

//-------------------------------------------------------------------------------------------------------//
                      // Funciones para borrar registro//
//-------------------------------------------------------------------------------------------------------//


//-------------------------------------------------------------------------------------------------------//
    // Retornamos las funciones del componente ademas de objetos o arreglos dentrro de este store  //
//------------------------------------------------------------------------------------------------------//
    return { clients, isModalOpen, openModal, closeModal, submitForm, formData };
  }
});

</script> -->
 -->
