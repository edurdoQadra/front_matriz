<template>
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



  <tbody>
          <tr v-for="client in clients.clients" :key="client.id">
            <td>{{ client.username }}</td>
            <td>{{ client.surname }}</td>
            <td>{{ client.correo }}</td>
            <!-- Otros campos según sea necesario -->
            <td>
              <button @click="verCliente(client)">Ver</button>
              <button @click="editarCliente(client)">Editar</button>
              <button @click="borrarCliente(client)">Borrar</button>
            </td>
          </tr>
        </tbody>
</template>

<script>
import { defineComponent } from 'vue';
import { useClientesStore } from '../store/store'; // Importa tu store

export default defineComponent({
  name: 'ClienteDetails',
  setup() {
    const store = useClientesStore(); // Usa el store de clientes

    // Obtén el ID del cliente de la ruta
    const route = useRoute();
    const clientId = route.params.id;

    // Usa el método del store para obtener los detalles del cliente
    const client = store.getClient(clientId);

    return { client };
  }
});
</script>
