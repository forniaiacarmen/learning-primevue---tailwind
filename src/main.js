import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css' // Añade esta línea
import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './router/index';

// Importaciones de PrimeVue
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css' // Estilos de iconos

// main.js o en tu componente
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const app = createApp(App)

app.use(PrimeVue, {
  unstyled: false, // Cambiado a false para ver iconos
  ripple: true // Efectos de click opcionales
})
app.use(router);

app.mount('#app')

AOS.init({
  duration: 800,       // Duración de la animación
  easing: 'ease-in-out', // Tipo de easing
  once: true,          // Animación solo una vez
});