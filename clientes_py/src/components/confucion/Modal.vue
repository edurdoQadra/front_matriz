
<div v-show="isModalOpen" class="fixed inset-0 overflow-y-auto flex items-center justify-center">
    <div class="fixed inset-0 bg-gray-500 opacity-75"></div>
    <div class="bg-white rounded-lg overflow-hidden shadow-xl max-w-3xl w-full mx-auto z-50">
        <div class="p-6">
            <h2 class="text-xl font-bold mb-4">Agregar Cliente</h2>
      <!-- Aquí puedes colocar tu formulario de agregar cliente -->
      <form @submit.prevent="submitForm" class="grid grid-cols-1 gap-6">


  <div class="flex flex-col">
    <label for="administrador" class="block text-sm font-medium text-gray-700">Administrador</label>
    <input type="text" id="administrador" v-model="formData.ADMINISTRADOR" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input ASOCIADO -->
  <div class="flex flex-col">
    <label for="asociado" class="block text-sm font-medium text-gray-700">Asociado</label>
    <input type="text" id="asociado" v-model="formData.ASOCIADO" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input BASE_EMPRESA -->
  <div class="flex flex-col">
    <label for="base_empresa" class="block text-sm font-medium text-gray-700">Base Empresa</label>
    <input type="text" id="base_empresa" v-model="formData.BASE_EMPRESA" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input CODIGOS -->
  <div class="flex flex-col">
    <label for="codigos" class="block text-sm font-medium text-gray-700">Códigos</label>
    <input type="text" id="codigos" v-model="formData.CODIGOS" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input CORREO -->
  <div class="flex flex-col">
    <label for="correo" class="block text-sm font-medium text-gray-700">Correo</label>
    <input type="email" id="correo" v-model="formData.CORREO" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input DEPARTAMENTO -->
  <div class="flex flex-col">
    <label for="departamento" class="block text-sm font-medium text-gray-700">Departamento</label>
    <input type="text" id="departamento" v-model="formData.DEPARTAMENTO" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input DIRECCION -->
  <div class="flex flex-col">
    <label for="direccion" class="block text-sm font-medium text-gray-700">Dirección</label>
    <input type="text" id="direccion" v-model="formData.DIRECCION" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input DISTRITO -->
  <div class="flex flex-col">
    <label for="distrito" class="block text-sm font-medium text-gray-700">Distrito</label>
    <input type="text" id="distrito" v-model="formData.DISTRITO" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input DNI -->
  <div class="flex flex-col">
    <label for="dni" class="block text-sm font-medium text-gray-700">DNI</label>
    <input type="text" id="dni" v-model="formData.DNI" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input ID -->
  <div class="flex flex-col">
    <label for="id" class="block text-sm font-medium text-gray-700">ID</label>
    <input type="text" id="id" v-model="formData.ID" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input NUMERO -->
  <div class="flex flex-col">
    <label for="numero" class="block text-sm font-medium text-gray-700">Número</label>
    <input type="text" id="numero" v-model="formData.NUMERO" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input PROVINCIA -->
  <div class="flex flex-col">
    <label for="provincia" class="block text-sm font-medium text-gray-700">Provincia</label>
    <input type="text" id="provincia" v-model="formData.PROVINCIA" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input RAZON_SOCIAL -->
  <div class="flex flex-col">
    <label for="razon_social" class="block text-sm font-medium text-gray-700">Razón Social</label>
    <input type="text" id="razon_social" v-model="formData.RAZON_SOCIAL" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input REFERENCIA -->
  <div class="flex flex-col">
    <label for="referencia" class="block text-sm font-medium text-gray-700">Referencia</label>
    <input type="text" id="referencia" v-model="formData.REFERENCIA" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input REPORTES -->
  <div class="flex flex-col">
    <label for="reportes" class="block text-sm font-medium text-gray-700">Reportes</label>
    <input type="text" id="reportes" v-model="formData.REPORTES" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input RUC -->
  <div class="flex flex-col">
    <label for="ruc" class="block text-sm font-medium text-gray-700">RUC</label>
    <input type="text" id="ruc" v-model="formData.RUC" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input TELEFONO -->
  <div class="flex flex-col">
    <label for="telefono" class="block text-sm font-medium text-gray-700">Teléfono</label>
    <input type="text" id="telefono" v-model="formData.TELEFONO" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Input STATUS -->
  <div class="flex flex-col">
    <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
    <input type="text" id="status" v-model="formData.STATUS" class="input-text border rounded-md py-2 px-3 mt-1">
  </div>

  <!-- Botones -->
  <div class="mt-6">
    <button
      ref="submitButton"
      type="submit"
      class="px-4 py-2 bg-blue-500 text-white rounded btn-action hover:bg-blue-600"
    >
      Guardar
    </button>

    <button type="button" @click="closeModal" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ml-4">Cancelar</button>
  </div>
</form>


    </div>
  </div>


</div>