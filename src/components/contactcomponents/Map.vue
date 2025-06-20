<template>
  <div class="rounded-lg shadow-md overflow-hidden p-1">
    <div class="h-80 w-full relative ">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE!2dYOUR_LONGITUDE!3dYOUR_ZOOM_LEVEL!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ2JzQ2LjkiTiA2wrA1Myc1MS42Ilc!5e0!3m2!1sen!2ses!4v1620000000000!5m2!1sen!2ses" 
        width="100%" 
        height="100%" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy"
        class="absolute inset-0"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
// Puedes añadir props si necesitas personalizar el mapa
// Ejemplo: 
// const props = defineProps({ lat: String, lng: String });
</script>