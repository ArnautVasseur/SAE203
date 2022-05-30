<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="overflow-hidden">
    <button class="text-xl z-50 relative w-full" aria-haspopup="true" aria-controls="menu" 
              :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
              <p v-if="!menuOuvert">fermé</p>
              <p v-if="menuOuvert" class="animate-fadeInRight text-white">ouvert</p>
          </button>

          <div id="menu" class="fixed inset-0 translate-x-full bg-slate-900 motion-safe:duration-1000 motion-safe:transition-transform
          animate-fadeInRight"
              :class="{ 'translate-x-0': menuOuvert }" v-if="menuOuvert">
                <div class="flex-col">
                  <RouterLink to="/about">
                      
                  </RouterLink>
                </div>
          </div>
  </nav>
</template>

<script>

export default{
  name:"",
  data(){
    return{
      menuOuvert:false
    }
  },
  components:{
    
  }
}

</script>
