<template>
  <footer class="bg-[#232757] text-[#f1e6ca] py-8 px-4 mt-auto">
    <div class="container mx-auto">
      <!-- Grid de columnas -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Columna 1: Logo e info -->
        <div class="flex flex-col items-center md:items-start">
          <img 
            src="" 
            alt="Bar Nou Chaparral" 
            class="h-16 mb-4"
          >
          <p class="text-center md:text-left">
            C/ Ejemplo, 123<br>
            Benaguasil, Valencia<br>
            Tel: 123 456 789
          </p>
        </div>

        <!-- Columna 2: Horario -->
        <div class="text-center md:text-left">
          <h3 class="text-xl font-bold text-[#f7d622] mb-4">Horario</h3>
          <ul class="space-y-2">
            <li>Lunes a Viernes: 8:00 - 00:00</li>
            <li>Sábados: 10:00 - 02:00</li>
            <li>Domingos: Cerrado</li>
          </ul>
        </div>

        <!-- Columna 3: Redes sociales -->
        <div class="text-center md:text-left">
          <h3 class="text-xl font-bold text-[#f7d622] mb-4">Síguenos</h3>
          <div class="flex justify-center md:justify-start space-x-4">
            <a href="#" class="text-2xl hover:text-[#f7d622] transition">
              <i class="pi pi-facebook"></i>
            </a>
            <a href="#" class="text-2xl hover:text-[#f7d622] transition">
              <i class="pi pi-instagram"></i>
            </a>
            <a href="#" class="text-2xl hover:text-[#f7d622] transition">
              <i class="pi pi-whatsapp"></i>
            </a>
          </div>
          

        </div>
      </div>

      <!-- División y copyright -->
      <div class="border-t border-[#f1e6ca]/30 mt-8 pt-6 text-center">
        <p>© {{ new Date().getFullYear() }} Bar Nou Chaparral. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Button from 'primevue/button';
</script>