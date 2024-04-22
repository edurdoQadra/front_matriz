import { createRouter, createWebHistory } from 'vue-router';
import ClientesList from '../components/ClientesList.vue'; // Importa ClientesList con ruta relativa
//import ClienteDetails from '../components/ClienteDetails.vue'; // Importa ClienteDetails con ruta relativa
//import ClienteForm from '../components/ClienteForm.vue'; // Importa ClienteForm con ruta relativa

const routes = [
  { path: '/', redirect: '/clients' },
  { path: '/clients', component: ClientesList },
 // { path: '/clients/:id', component: ClienteDetails },
  //{ path: '/clients/new', component: ClienteForm },
 // { path: '/clients/:id/edit', component: ClienteForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
