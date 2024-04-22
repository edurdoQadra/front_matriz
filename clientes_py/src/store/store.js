// En un archivo llamado store.js

import { defineStore } from 'pinia';

export const useClientesStore = defineStore({
  id: 'clientes',
  state: () => ({
    clientes: [],
    formData: {
      ADMINISTRADOR:'',
      ASOCIADO: '',
      BASE_EMPRESA: '',
      CODIGOS: ' ',
      CORREO: 0,
      DEPARTAMENTO: '',
      DIRECCION: '',
      DISTRITO: ' ',
      DNI: '',
      NUMERO: '',
      PROVINCIA: '',
      RAZON_SOCIAL: ' ',
      REFERENCIA: ' ',
      REPORTES: '',
      RUC: '',
      TELEFONO: ''
      // Agrega más campos según tu esquema de base de datos
    },
    client: null,
  }),
  actions: {
    
    // Acciones para interactuar con la lista de clientes
    async fetchClientes() {
      // Lógica para obtener la lista de clientes desde tu backend
      try {
        const response = await fetch('http://localhost:5000/clientes'); // Suponiendo que esta es tu ruta de API
        const data = await response.json();
        //console.log(data);
        this.clientes = data;
        return(data);
      } catch (error) {
        console.error('Error al obtener la lista de clientes:', error);
      }
    },

    // Acciones para interactuar con un cliente específico
    async fetchCliente(id) {
      try {
        const response = await fetch(`http://localhost:5000/clientes/${id}`);
        const data = await response.json();
        this.client = data;
      } catch (error) {
        console.error('Error al obtener los detalles del cliente:', error);
      }
    },

    // async createCliente(formData) {
    //   // Lógica para crear un nuevo cliente en tu backend
    //   try {
    //     await fetch('http://localhost:5000/clientes', {
    //       method: 'POST',
    //       body: JSON.stringify(formData),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });
    //     // Actualizar la lista de clientes después de crear uno nuevo si es necesario
    //     await this.fetchClientes();
    //   } catch (error) {
    //     console.error('Error al crear el cliente:', error);
    //   }
    // },

    async createCliente(formData) {
      try {
        const response = await fetch('http://localhost:5000/clientes', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
            'cors':'no-cors' 
          },
        });

        if (response.ok) {
          // Cliente creado exitosamente
          const clienteCreado = await response.json();
          console.log('Cliente creado exitosamente:', clienteCreado);
          return { status: 'success', message: 'Cliente creado exitosamente' };
        } else {
          // Error al crear el cliente
          const errorMessage = await response.text();
          console.error('Error al crear el cliente:', errorMessage);
          return { status: 'error', message: 'Error al crear el cliente' };
        }
      } catch (error) {
        // Error de red u otro error
        console.error('Error al crear el cliente:', error);
        return { status: 'error', message: 'Error al crear el cliente' };
      }
    },


    async updateCliente(formData) {
      // Lógica para actualizar un cliente existente en tu backend
      try {
        await fetch(`/api/clients/${formData.Id}`, {
          method: 'PUT',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        // Actualizar la lista de clientes después de actualizar uno existente si es necesario
        await this.fetchClientes();
      } catch (error) {
        console.error('Error al actualizar el cliente:', error);
      }
    },
  },
  
});
