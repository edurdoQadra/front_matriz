<template>
  <div class="w-full px-40 py-20">
    <!--  -->
    <h2 class="text-2xl font-bold mb-5">Lista de Clientes</h2>
    <div>
      <!--  -->
      <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 flex justify-end dark:text-blue-400" role="alert">
      <!-- buscador aparecera con databales -->
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
    <div class="overflow-x-auto">
      <table id="myTable" class="table-auto min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th class="px-4 py-2 bg-gray-100 border border-gray-300">Nombre</th>
            <th class="px-4 py-2 bg-gray-100 border border-gray-300">Apellido</th>
            <th class="px-4 py-2 bg-gray-100 border border-gray-300">Correo Electrónico</th>
            <!-- Otros encabezados según sea necesario -->
            <th class="px-4 py-2 bg-gray-100 border border-gray-300">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <!--  -->
          <!--  -->
        </tbody>
      </table>
    </div>

    <div v-show="isModalOpen" class="fixed inset-0 overflow-y-auto  flex items-center justify-center">
  
<!-- Fondo difuminado -->
  <div class="fixed inset-0 bg-gray-500 opacity-75"></div>

<!-- ***************************************  MODAL CREAR USUARIO   ********************************************************** -->
                                      <!--    Contenido del Modal   -->
<!-- **********************************      MODAL CREAR USUARIO    ************************************************* -->

  <div class="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full mx-auto z-50">
    <div class="p-6">
      <h2 class="text-xl font-bold mb-4">Agregar Cliente</h2>
      <!-- Aquí puedes colocar tu formulario de agregar cliente -->
      <form @submit.prevent="submitForm" class="grid grid-cols-1 gap-6">
        <!-- Input Username -->
        <div class="flex flex-col">
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" id="username" v-model="formData.username" class="input-text border rounded-md py-2 px-3 mt-1">
        </div>

        <!-- Input Nombre -->
        <div class="flex flex-col">
          <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
          <input type="text" id="name" v-model="formData.name" class="input-text border rounded-md py-2 px-3 mt-1">
        </div>

        <!-- Input Apellido -->
        <div class="flex flex-col">
          <label for="surname" class="block text-sm font-medium text-gray-700">Apellido</label>
          <input type="text" id="surname" v-model="formData.surname" class="input-text border rounded-md py-2 px-3 mt-1">
        </div>

        <!-- Input Mobile -->
        <div class="flex flex-col">
          <label for="mobile" class="block text-sm font-medium text-gray-700">Mobile</label>
          <input type="text" id="mobile" v-model="formData.mobile" class="input-text border rounded-md py-2 px-3 mt-1">
        </div>

        <!-- Input Correo -->
        <div class="flex flex-col">
          <label for="correo" class="block text-sm font-medium text-gray-700">Correo</label>
          <input type="email" id="correo" v-model="formData.correo" class="input-text border rounded-md py-2 px-3 mt-1">
        </div>

        <!-- Botones -->
        <div class="mt-6">
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Guardar</button>
          <button type="button" @click="closeModal" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ml-4">Cancelar</button>
        </div>
      </form>
    </div>
  </div>

 <!-- ***************************************  MODAL CREAR USUARIO   ********************************************************** -->
                                      <!--    Contenido del Modal   -->
<!-- **********************************      MODAL CREAR USUARIO    ************************************************* -->

</div>


    <!-- /Modal -->
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useClientesStore } from '../store/store';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt';

export default defineComponent({
  name: 'ClientesList',
  setup() {
    //Variables
    const store = useClientesStore();
    const clients = ref([]);
    const formData = ref({
      username: '',
      name: '',
      surname: '',
      mobile: '',
      correo: '',
    });

    const isModalOpen = ref(false);

    //-----------------------------------FIN VARIABLES------------------------------//

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    const submitForm = async (event) => {
      event.preventDefault();
      console.log(formData.value);
      await store.createCliente(formData.value);
      closeModal();
    };



//----------------------------------------------------------------------------------------//
//----------------------------------- SHOW USUARIO ---------------------------------------//
//----------------------------------------------------------------------------------------//
onMounted(async () => {
  const fetchedData = await store.fetchClientes(); // Obtener los datos
  let fetchedClients = [];

  if (typeof fetchedData === 'object' && fetchedData.clients) {
    fetchedClients = fetchedData.clients;
    console.log(fetchedClients);
  } else {
    console.error('Los datos recibidos no son válidos:', fetchedData);
  }

  const table = $('#myTable').DataTable({
    searching: true,
    paging: true,
    data: fetchedClients,
    columns: [
      { data: 'Name' },
      { data: 'Surname' },
      { data: 'Correo' },
      {
        data: null,
        render: function(data, type, row) {
          return `
            <div class="flex justify-center space-x-4">
              <button class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" @click="verCliente(${row.Id})">Ver</button>
              <button class="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600" @click="editarCliente(${row.Id})">Editar</button>
              <button class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600" @click="borrarCliente(${row.Id})">Borrar</button>
            </div>
          `;
        }
      }
    ],
    language: {
      "decimal": "",
      "emptyTable": "No hay datos disponibles en la tabla",
      "info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
      "infoEmpty": "Mostrando 0 a 0 de 0 entradas",
      "infoFiltered": "(filtrado de _MAX_ entradas totales)",
      "infoPostFix": "",
      "thousands": ",",
      "lengthMenu": "Mostrar _MENU_ entradas",
      "loadingRecords": "Cargando...",
      "processing": "Procesando...",
      "search": "Buscar:",
      "zeroRecords": "No se encontraron registros coincidentes",
      "paginate": {
        "first": "Primero",
        "last": "Último",
        "next": "Siguiente",
        "previous": "Anterior"
      },
      "aria": {
        "sortAscending": ": activar para ordenar la columna ascendente",
        "sortDescending": ": activar para ordenar la columna descendente"
      }
    }
  });
});

//----------------------------------------------------------------------------------------//
//--------------------------------- CREATE USUARIO --------------------------------------//
//----------------------------------------------------------------------------------------//



//----------------------------------------------------------------------------------------//
//--------------------------------- EDIT USUARIO --------------------------------------//
//----------------------------------------------------------------------------------------//


//----------------------------------------------------------------------------------------//
//--------------------------------- DELETE USUARIO --------------------------------------//
//----------------------------------------------------------------------------------------//


    return { clients, isModalOpen, openModal, closeModal, submitForm, formData };
  }
});
</script>

