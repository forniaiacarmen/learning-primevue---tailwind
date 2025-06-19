<template>
  <div class="min-h-screen bg-gray-900 text-white flex p-1">
    <!-- Columna izquierda (Visible solo en desktop) -->
    <div class="hidden lg:block w-48 bg-gray-800 p-4 sticky top-0 h-screen overflow-y-auto">
      <h3 class="text-amber-500 font-bold mb-4">Publicidad</h3>
      <div class="flex-1"> <!-- Este div ocupará todo el espacio disponible -->
        <div class="bg-gray-700 p-2 rounded-lg h-full flex items-center justify-center">
          <p>Anuncio 1</p>
        </div>    
      </div>
    </div>

    <!-- Columna central (Contenido principal) -->
    <main class="flex-1 w-full p-0.4">
      <div class="bg-[#f1e6ca] text-gray-900">
        <div class="container mx-auto px-4 py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              v-for="(col, index) in 4" 
              :key="index"
              class="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-[#232757]/20 shadow-sm"
            >
              <Card style="width: 100%; max-width: 25rem; overflow: hidden; margin: 0 auto">
                <template #header>
                  <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" class="w-full h-auto" />
                </template>
                <template #title>Advanced Card</template>
                <template #content>
                  <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                  </p>
                </template>
                <!-- <template #footer>
                  <div class="flex gap-3 mt-1">
                    <Button label="Cancel" severity="secondary" outlined class="w-full" ></Button>
                    <Button label="Save" class="w-full" ></Button>
                  </div>
                </template> -->
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Columna derecha (Visible solo en desktop) -->
    <div class="hidden lg:block w-48 bg-gray-800 p-4 sticky top-0 h-screen overflow-y-auto">
      <h3 class="text-amber-500 font-bold mb-4">Publicidad</h3>
      <div class="space-y-4">
        <div class="bg-gray-700 p-2 rounded-lg h-64 flex items-center justify-center">
          <p>Anuncio 3</p>
        </div>
        <div class="bg-gray-700 p-2 rounded-lg h-64 flex items-center justify-center">
          <p>Anuncio 4</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importaciones necesarias
import Card from 'primevue/card';
import Button from 'primevue/button';
</script>