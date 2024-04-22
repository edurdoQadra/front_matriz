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



              <!-- ---------------------------------------- MODAL ----------------------------------------------------  -->
        <!-- Modal -->
        <div v-show="isModalOpen" class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <form @submit.prevent="submitForm">
                        <div class="sm:flex sm:items-start">
                            <div
                                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg class="h-6 w-6 text-green-600" stroke="currentColor" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg leading-6 font-medium text-gray-900">
                                    Modal Registro Matriz
                                </h3>
                                <div class="mt-2">
                                    <div class="sm:flex sm:items-start">

                                        <div class="mx-auto flex-shrink-0 sm:mx-0 sm:w-1/2">
                                            <!-- Inputs en la primera columna -->
                                            <div class="grid grid-cols-1 gap-4">
                                                <!-- Input ADMINISTRADOR -->
                                                <div class="flex flex-col">
                                                    <label for="administrador"
                                                        class="block text-sm font-medium text-gray-700">Administrador</label>
                                                    <input type="text" id="administrador"
                                                        v-model="formData.ADMINISTRADOR"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input ASOCIADO -->
                                                <div class="flex flex-col">
                                                    <label for="asociado"
                                                        class="block text-sm font-medium text-gray-700">Asociado</label>
                                                    <input type="text" id="asociado" v-model="formData.ASOCIADO"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input BASE_EMPRESA -->
                                                <div class="flex flex-col">
                                                    <label for="base_empresa"
                                                        class="block text-sm font-medium text-gray-700">Base
                                                        Empresa</label>
                                                    <input type="text" id="base_empresa"
                                                        v-model="formData.BASE_EMPRESA"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input CODIGOS -->
                                                <div class="flex flex-col">
                                                    <label for="codigos"
                                                        class="block text-sm font-medium text-gray-700">Códigos</label>
                                                    <input type="text" id="codigos" v-model="formData.CODIGOS"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input CORREO -->
                                                <div class="flex flex-col">
                                                    <label for="correo"
                                                        class="block text-sm font-medium text-gray-700">Correo</label>
                                                    <input type="email" id="correo" v-model="formData.CORREO"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input DEPARTAMENTO -->
                                                <div class="flex flex-col">
                                                    <label for="departamento"
                                                        class="block text-sm font-medium text-gray-700">Departamento</label>
                                                    <input type="text" id="departamento"
                                                        v-model="formData.DEPARTAMENTO"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input DIRECCION -->
                                                <div class="flex flex-col">
                                                    <label for="direccion"
                                                        class="block text-sm font-medium text-gray-700">Dirección</label>
                                                    <input type="text" id="direccion"
                                                        v-model="formData.DIRECCION"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input DISTRITO -->
                                                <div class="flex flex-col">
                                                    <label for="distrito"
                                                        class="block text-sm font-medium text-gray-700">Distrito</label>
                                                    <input type="text" id="distrito" v-model="formData.DISTRITO"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input DNI -->
                                                <div class="flex flex-col">
                                                    <label for="dni"
                                                        class="block text-sm font-medium text-gray-700">DNI</label>
                                                    <input type="text" id="dni" v-model="formData.DNI"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>
                                                <!-- Agrega más campos de formulario aquí -->
                                            </div>
                                        </div>
                                        <div class="mt-3 sm:mt-0 sm:ml-4 sm:w-1/2">
                                            <!-- Inputs en la segunda columna -->
                                            <div class="grid grid-cols-1 gap-4">
                                                <!-- Input ID -->
                                                <div class="flex flex-col">
                                                    <label for="id"
                                                        class="block text-sm font-medium text-gray-700">ID</label>
                                                    <input type="text" id="id" v-model="formData.ID"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input NUMERO -->
                                                <div class="flex flex-col">
                                                    <label for="numero"
                                                        class="block text-sm font-medium text-gray-700">Número</label>
                                                    <input type="text" id="numero" v-model="formData.NUMERO"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input PROVINCIA -->
                                                <div class="flex flex-col">
                                                    <label for="provincia"
                                                        class="block text-sm font-medium text-gray-700">Provincia</label>
                                                    <input type="text" id="provincia"
                                                        v-model="formData.PROVINCIA"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input RAZON_SOCIAL -->
                                                <div class="flex flex-col">
                                                    <label for="razon_social"
                                                        class="block text-sm font-medium text-gray-700">Razón
                                                        Social</label>
                                                    <input type="text" id="razon_social"
                                                        v-model="formData.RAZON_SOCIAL"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input REFERENCIA -->
                                                <div class="flex flex-col">
                                                    <label for="referencia"
                                                        class="block text-sm font-medium text-gray-700">Referencia</label>
                                                    <input type="text" id="referencia"
                                                        v-model="formData.REFERENCIA"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input REPORTES -->
                                                <div class="flex flex-col">
                                                    <label for="reportes"
                                                        class="block text-sm font-medium text-gray-700">Reportes</label>
                                                    <input type="text" id="reportes"
                                                        v-model="formData.REPORTES"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input RUC -->
                                                <div class="flex flex-col">
                                                    <label for="ruc"
                                                        class="block text-sm font-medium text-gray-700">RUC</label>
                                                    <input type="text" id="ruc" v-model="formData.RUC"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input TELEFONO -->
                                                <div class="flex flex-col">
                                                    <label for="telefono"
                                                        class="block text-sm font-medium text-gray-700">Teléfono</label>
                                                    <input type="text" id="telefono"
                                                        v-model="formData.TELEFONO"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>

                                                <!-- Input STATUS -->
                                                <div class="flex flex-col">
                                                    <label for="status"
                                                        class="block text-sm font-medium text-gray-700">Status</label>
                                                    <input type="text" id="status"
                                                        v-model="formData.STATUS"
                                                        class="input-text border rounded-md py-2 px-3 mt-1">
                                                </div>
                                                <!-- Agrega más campos de formulario aquí -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                        <button type="submit"
                                            class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                            Guardar
                                        </button>
                                    </span>
                                    <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                                        <button type="button" @click="closeModal"
                                            class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                            Cancel
                                        </button>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
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
      converted: '',
      correo: '',
      creation: '',
      id: '',
      mobile: '',
      name: '',
      status: '',
      surname: '',
      update: '',
      username: ''
    });
     const isModalOpen = ref(false);
    const modalTitle = ref('');
    const modalButtonText = ref('Guardar'); // Inicialmente el texto es 'Guardar'



    //-----------------------------------FIN VARIABLES------------------------------//

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    // const submitForm = async (event) => {
    //   event.preventDefault();
    //   console.log(formData.value);
    //   await store.createCliente(formData.value);
    //   closeModal();
    // };

    const submitForm = async (event) => {
      event.preventDefault();
      if (modalButtonText.value === 'Guardar') {
        console.log(formData.value);
        // await store.createCliente(formData.value);
      } else {
        await store.updateCliente(formData.value);
      }
      closeModal();
    };



//----------------------------------------------------------------------------------------//
//----------------------------------- SHOW USUARIO ---------------------------------------//
//----------------------------------------------------------------------------------------//
onMounted(async () => {
  const fetchedData = await store.fetchClientes(); // Obtener los datos
  let fetchedClients = [];

  if (typeof fetchedData === 'object' && fetchedData.clientes) {
    fetchedClients = fetchedData.clientes;
    console.log(fetchedClients);
  } else {
    console.error('Los datos recibidos no son válidos:', fetchedData);
  }

  const table = $('#myTable').DataTable({
    searching: true,
    paging: true,
    data: fetchedClients,
    columns: [
      { data: 'ADMINISTRADOR' },
      { data: 'CORREO' },
      { data: 'ASOCIADO' },
      {
        data: null,
        render: function(data, type, row) {
          return `
            <div class="flex justify-center space-x-4">
              <button class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" @click="verCliente(${row.ID})">Ver</button>
              <button class="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600" @click="editarCliente(${row.ID})">Editar</button>
              <button class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600" @click="borrarCliente(${row.ID})">Borrar</button>
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
//------------------------------------------------------------------------------------//



//----------------------------------------------------------------------------------------//
//--------------------------------- CREATE USUARIO --------------------------------------//
//----------------------------------------------------------------------------------------//



//----------------------------------------------------------------------------------------//
//--------------------------------- EDIT USUARIO --------------------------------------//
//----------------------------------------------------------------------------------------//


    const editarCliente = async (id) => {
      await store.fetchCliente(id);
      formData.value = { ...store.client };
      isModalOpen.value = true;
      modalTitle.value = 'Editar Cliente';
      modalButtonText.value = 'Actualizar';
    };


//----------------------------------------------------------------------------------------//
//--------------------------------- SHOW USUARIO --------------------------------------//
//----------------------------------------------------------------------------------------//

    const verCliente = async (id) => {
      await store.fetchCliente(id);
      formData.value = { ...store.client };
      isModalOpen.value = true;
      modalTitle.value = 'Detalles del Cliente';
      modalButtonText.value = 'Cerrar';
    };


//----------------------------------------------------------------------------------------//
//--------------------------------- DELETE USUARIO --------------------------------------//
//----------------------------------------------------------------------------------------//


    return { clients, isModalOpen, openModal, closeModal, submitForm, formData };
  }
});
</script>

