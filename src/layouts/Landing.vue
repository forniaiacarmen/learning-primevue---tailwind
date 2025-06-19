<template>
  <div class="w-full">
    <MyMenuBar/>
    <HeroTitle/>    
    <Columns/>
    <Footer/>
  </div>
</template>

<script>
import HeroTitle from '@/components/HeroTitle.vue';
import MyMenuBar from '@/components/MyMenuBar.vue';
import Columns from '@/components/Columns.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    HeroTitle,
    MyMenuBar,    
    Columns,
    Footer

    
  }
}
</script>