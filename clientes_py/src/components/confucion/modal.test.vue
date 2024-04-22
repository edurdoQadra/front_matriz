
              <div v-show="isModalOpen" style="height: 70vh; padding-top: 150px;" class="fixed inset-0 flex items-center justify-center ">
              <div class="fixed inset-0 bg-gray-500 opacity-75"></div>
              <div class="bg-white rounded-lg overflow-hidden shadow-xl max-w-3xl w-full mx-auto z-50  flex flex-col justify-center"> <!-- Cambié las clases y añadí flex y justify-center -->
              <div class="p-6 h-70vh">
              <div class="flex items-center mb-6 ">
              <img src="./assets/vue.svg" alt="Imagen de encabezado" class="h-8 w-8 mr-2">
              <h2 class="text-xl font-bold">Agregar Cliente</h2>
              </div class="">
              <form @submit.prevent="submitForm" class="grid grid-cols-1 gap-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
              <label for="administrador" class="block text-sm font-medium text-gray-700">Administrador</label>
              <input type="text" id="administrador" v-model="formData.ADMINISTRADOR" class="input-text border rounded-md py-2 px-3 mt-1">
              </div>
              <div>
              <label for="asociado" class="block text-sm font-medium text-gray-700">Asociado</label>
              <input type="text" id="asociado" v-model="formData.ASOCIADO" class="input-text border rounded-md py-2 px-3 mt-1">
              </div>
              <!-- Agrega más campos de formulario aquí -->

              <!-- Input ADMINISTRADOR -->
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
              </div>
                              <!-- Botones -->
                              <div class="flex justify-end mt-6">
                                  <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Guardar</button>
                                  <button type="button" @click="closeModal" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ml-4">Cancelar</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>

              <div  class="fixed inset-0 flex items-center justify-center ">
                                              <div class="fixed inset-0 bg-gray-500 opacity-75"></div>
                                              <div class="bg-white rounded-lg overflow-hidden shadow-xl max-w-3xl w-full mx-auto z-50  flex flex-col justify-center"> <!-- Cambié las clases y añadí flex y justify-center -->
                                              <div class="p-6 h-70vh">
                                              <div class="flex items-center mb-6 ">
                                              <img src="./assets/vue.svg" alt="Imagen de encabezado" class="h-8 w-8 mr-2">
                                              <h2 class="text-xl font-bold">Agregar Cliente</h2>
                                              </div class="">
                                              <form @submit.prevent="submitForm" class="grid grid-cols-1 gap-6">
                                              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                              <div>
                                              <label for="administrador" class="block text-sm font-medium text-gray-700">Administrador</label>
                                              <input type="text" id="administrador" v-model="formData.ADMINISTRADOR" class="input-text border rounded-md py-2 px-3 mt-1">
                                              </div>
                                              <div>
                                              <label for="asociado" class="block text-sm font-medium text-gray-700">Asociado</label>
                                              <input type="text" id="asociado" v-model="formData.ASOCIADO" class="input-text border rounded-md py-2 px-3 mt-1">
                                              </div>
                                              <!-- Agrega más campos de formulario aquí -->

                                              <!-- Input ADMINISTRADOR -->
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
                                              </div>
                                                              <!-- Botones -->
                                                              <div class="flex justify-end mt-6">
                                                                  <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Guardar</button>
                                                                  <button type="button" @click="closeModal" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ml-4">Cancelar</button>
                                                              </div>
                                                          </form>
                                                      </div>
                                                  </div>
      </div>



      <div v-show="isModalOpen" id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Terms of Service
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5 space-y-4">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                    <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                </div>
            </div>
        </div>
    </div>