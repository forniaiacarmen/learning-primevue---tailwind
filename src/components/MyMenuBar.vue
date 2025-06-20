<template>
  <nav class="shadow-md px-4 py-3 flex items-center justify-between bg-background">
    <!-- Logo -->
    <div class="text-xl font-bold text-backgroundButton [text-shadow:1px_1px_1px_#000]">MiApp</div>

    <!-- Menú hamburguesa -->
    <button @click="toggle = !toggle" class="md:hidden">
      <i class="pi pi-bars text-2xl text-primary"></i>
    </button>

    <!-- Menú horizontal -->
    <ul class="hidden md:flex space-x-6 text-gray-700 font-medium">
      <li><a href="/" class="hover:text-primary">Inicio</a></li>
      <li><a href="#" class="hover:text-primary">Carta</a></li>
      <li><a href="/contact" class="hover:text-primary text-backgroundButton [text-shadow:1px_1px_1px_#000]">Contacto</a></li>
    </ul>

    <!-- Usuario -->
    <!-- <Button icon="pi pi-user" class="p-button-text text-primary hidden md:block" /> -->
  </nav>

  <!-- Menú móvil -->
  <ul v-if="toggle" class="md:hidden bg-white px-4 pt-2 pb-4 shadow">
    <li class="py-2"><a href="/" class="block hover:text-primary">Inicio</a></li>
    <li class="py-2"><a href="#" class="block hover:text-primary">Carta</a></li>
    <li class="py-2"><a href="/contact" class="block hover:text-primary">Contacto</a></li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const toggle = ref(false)
</script>
