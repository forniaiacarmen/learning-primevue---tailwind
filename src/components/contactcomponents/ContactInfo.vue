<template>
  <!-- Contenedor principal con fondo degradado -->
  <div class="w-full  py-12 px-4 sm:px-6 lg:px-8 bg-background">
    <!-- Contenedor de la tarjeta con efecto hover y transición -->
    <div class="mx-auto max-w-3xl bg-background rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
      <!-- Cabecera con gradiente -->
      <div class=" p-6 text-center">
        <h3 class="text-2xl font-bold text-text">Contáctanos</h3>
      </div>
      
      <!-- Contenido con grid responsive -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <!-- Columna de información -->
        <div class="space-y-6">
          <div 
            v-for="(item, index) in contactItems" 
            :key="index"
            class="flex items-start group transition-all duration-200 hover:bg-blue-50 p-3 rounded-lg"
          >
            <div class="flex-shrink-0  p-3 rounded-full">
              <i :class="`pi ${item.icon} text-xl`"></i>
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-semibold ">
                {{ item.title }}
              </h4>
              <p class="mt-1">{{ item.content }}</p>
              <p v-if="item.additional" class="text-sm mt-1">{{ item.additional }}</p>
            </div>
          </div>
        </div>
        
        <!-- Columna del mapa (puedes reemplazar por imagen o mapa real) -->
        <div class="hidden md:block">
          <Map/>
        </div>
      </div>    

    </div>
  </div>
</template>

<script setup>
import Map from './Map.vue';
const contactItems = [
  {
    icon: 'pi-map-marker',
    title: 'Dirección',
    content: 'Calle Ejemplo, 123',
    additional: 'Ciudad, País 46001'
  },
  {
    icon: 'pi-phone',
    title: 'Teléfono',
    content: '+34 123 456 789',
    additional: 'Lunes a Viernes: 9:00-18:00'
  },
  {
    icon: 'pi-envelope',
    title: 'Email',
    content: 'contacto@miempresa.com',
    additional: 'Respondemos en 24h'
  },
  {
    icon: 'pi-clock',
    title: 'Horario',
    content: 'Lunes a Viernes: 9:00-18:00',
    additional: 'Sábados: 10:00-14:00'
  }
];
</script>

<style scoped>
/* Efecto de onda en los iconos al hacer hover */
.hover-wave:hover {
  animation: wave 0.8s ease;
}

@keyframes wave {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
</style>