<template>
  <div class="w-full">
    <MyMenuBar/>
    <HeroTitle/>    
    <Columns/>
    <Footer/>
  </div>
</template>

<script>
import HeroTitle from '@/components/landingcomponents/HeroTitle.vue';
import MyMenuBar from '@/components/sharedcomponents/MyMenuBar.vue';
import Columns from '@/components/landingcomponents/Columns.vue';
import Footer from '@/components/sharedcomponents/Footer.vue';

export default {
  components: {
    HeroTitle,
    MyMenuBar,    
    Columns,
    Footer

    
  }
}
</script>