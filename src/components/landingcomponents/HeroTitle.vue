<template>
  <section 
    ref="section"
    class="text-center py-16 overflow-hidden bg-background">
    <div class="container mx-auto px-4">
      <h1 
        ref="title"
        class="text-4xl md:text-8xl font-bold text-text mb-4 opacity-0 translate-y-10"
      >
        Bienvenido a Mi App
      </h1>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const section = ref(null)
const title = ref(null)
const subtitle = ref(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  // Animación de entrada
  gsap.fromTo(title.value, 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 3,
      ease: "power3.out"
    }
  )

  gsap.fromTo(subtitle.value, 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out"
    }
  )

  // Animación de gradiente al hacer scroll
  gsap.to(section.value, {
    backgroundPosition: "0% 100%",
    scrollTrigger: {
      trigger: section.value,
      start: "top center",
      end: "bottom center",
      scrub: true
    }
  })

  // Efecto parallax para el texto
  gsap.to(title.value, {
    y: -50,
    scrollTrigger: {
      trigger: section.value,
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  })

  gsap.to(subtitle.value, {
    y: -30,
    scrollTrigger: {
      trigger: section.value,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5
    }
  })
})
</script>

<style scoped>
/* Asegurar que las transformaciones funcionen */
.container {
  transform-style: preserve-3d;
}
</style>