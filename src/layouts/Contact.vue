<template>
      <div class="w-full">
        <MyMenuBar/>
        <ContactInfo/> 
        <Footer/>
      </div>
</template>

<script setup>
import ContactInfo from '@/components/contactcomponents/ContactInfo.vue';   // Ajusta la ruta
import MyMenuBar from '@/components/sharedcomponents/MyMenuBar.vue';
import Footer from '@/components/sharedcomponents/Footer.vue';

</script>