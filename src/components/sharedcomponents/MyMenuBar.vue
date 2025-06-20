<template>
  <nav class=" px-4 py-3 flex items-center justify-between bg-background">
    <!-- Logo como router-link -->
    <router-link to="/" class="text-xl font-bold text-backgroundButton [text-shadow:1px_1px_1px_#000]">
      MiApp
    </router-link>

    <!-- Menú hamburguesa -->
    <button @click="toggle = !toggle" class="md:hidden">
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
  </nav>

  <!-- Menú móvil -->
  <ul v-if="toggle" class="md:hidden bg-white px-4 pt-2 pb-4 shadow">
    <li class="py-2">
      <router-link to="/" class="block hover:text-primary" @click="toggle = false" active-class="text-primary">
        Inicio
      </router-link>
    </li>
    <li class="py-2">
      <a href="#" class="block hover:text-primary" @click.prevent="downloadPDF">
        Carta
      </a>
    </li>
    <li class="py-2">
      <router-link 
        to="/contact" 
        class="block hover:text-primary"
        @click="toggle = false"
        active-class="text-primary"
      >
        Contacto
      </router-link>
    </li>
  </ul>
</template>