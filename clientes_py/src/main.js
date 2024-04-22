import { createApp } from 'vue'; // Importa createApp desde Vue en lugar de importar Vue directamente
import ClientesList from './components/ClientesList.vue'; // Importa tu componente principal
import router from './routes/router'; // Importa tu archivo de rutas
import { createPinia } from 'pinia'; // Importa Pinia si lo estás utilizando

const app = createApp(ClientesList); // Crea la aplicación usando el componente ClientesList
app.use(router); // Usa las rutas importadas
app.use(createPinia()); // Usa Pinia si lo estás utilizando
app.mount('#app'); // Monta la aplicación en el elemento con el ID 'app'
