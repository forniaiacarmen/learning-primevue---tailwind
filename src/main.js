import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css' // Añade esta línea


// Importaciones de PrimeVue
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css' // Estilos de iconos
import Button from 'primevue/button' // Importa el componente explícitamente


const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true, // Cambiado a false para ver iconos
  ripple: true // Efectos de click opcionales
})
app.component('Button', Button)

app.mount('#app')