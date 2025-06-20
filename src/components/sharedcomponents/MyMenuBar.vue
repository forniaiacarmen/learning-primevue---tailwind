<template>
  <nav class="px-4 py-3 flex items-center justify-between bg-background relative">
    <!-- Logo como router-link -->
    <router-link to="/" class="text-xl font-bold text-backgroundButton [text-shadow:1px_1px_1px_#000]">
      MiApp
    </router-link>

    <!-- Menú hamburguesa -->
    <button @click="toggleMenu" class="md:hidden">
      <i class="pi pi-bars text-2xl text-primary"></i>
    </button>

    <!-- Menú horizontal -->
    <ul class="hidden md:flex space-x-6 text-gray-700 font-medium">
      <li>
        <router-link to="/" class="hover:text-primary" active-class="text-primary">
          Inicio
        </router-link>
      </li>
      <li>
        <a href="#" class="hover:text-primary" @click.prevent="downloadPDF">
          Carta
        </a>
      </li>
      <li>
        <router-link 
          to="/contact" 
          class="hover:text-primary text-backgroundButton [text-shadow:1px_1px_1px_#000]"
          active-class="text-primary"
        >
          Contacto
        </router-link>
      </li>
    </ul>

    <!-- Menú móvil -->
    <transition name="slide-down">
      <ul 
        v-if="isMobileMenuOpen" 
        class="md:hidden absolute top-full left-0 right-0 bg-white px-4 pt-2 pb-4 shadow z-50"
      >
        <li class="py-2">
          <router-link 
            to="/" 
            class="block hover:text-primary" 
            @click="closeMenu"
            active-class="text-primary"
          >
            Inicio
          </router-link>
        </li>
        <li class="py-2">
          <a 
            href="#" 
            class="block hover:text-primary" 
            @click.prevent="handleDownload"
          >
            Carta
          </a>
        </li>
        <li class="py-2">
          <router-link 
            to="/contact" 
            class="block hover:text-primary"
            @click="closeMenu"
            active-class="text-primary"
          >
            Contacto
          </router-link>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleDownload = () => {
  downloadPDF();
  closeMenu();
};

const downloadPDF = () => {
  // Tu lógica para descargar el PDF
  const pdfPath = '/carta.pdf';
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'Carta_MiApp.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>