<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div v-if="!['PageNotExist', 'styleguide'].includes($route.name)">
  <div class="flex justify-around">
      <div class="flex-col">
        <RouterLink to="/">
          <img src="./components/icons/Logo.svg" alt="Logo" class="m-auto w-20 mt-5 sm:w-32"/>
        </RouterLink>
        <h1 class="text-center font-bold text-2xl font-metal-mania">Metalancolique</h1>
      </div>

    <div class="hidden mt-16 lg:flex font-metal-mania">
      <router-link to="/billeterie" class="mx-5">
        <buttonmenuVue>
          <slot>
            Billeterie
          </slot>
        </buttonmenuVue>
      </router-link>
      <router-link to="/programme" class="mx-5">
        <buttonmenuVue>
          <slot>
            Programme
          </slot>
        </buttonmenuVue>
      </router-link>
      <router-link to="/festival" class="mx-5">
        <buttonmenuVue>
          <slot>
            Festival
          </slot>
        </buttonmenuVue>
      </router-link>
      <router-link to="/artistes" class="mx-5">
        <buttonmenuVue>
          <slot>
            Artistes
          </slot>
        </buttonmenuVue>
      </router-link>
    </div>
    </div>
  </div>
  <!--Début Menu-->
  <nav class="overflow-hidden h-full lg:hidden font-metal-mania">
    <button class="z-50 absolute top-6 right-8" aria-haspopup="true" aria-controls="menu" 
        :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert" v-if="!['PageNotExist', 'styleguide'].includes($route.name)">
        <svg class="absolute" v-if="!menuOuvert" width="49" height="49" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="url(#pattern0)" d="M0 0h49v49H0z"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_1004_881" transform="scale(.00195)"/></pattern><image id="image0_1004_881" width="512" height="512" xlink:href="data:image/png;base64,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"/></defs></svg>
        <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="2.82843" y1="3.3537" x2="47.8284" y2="48.3537" stroke="white" stroke-width="8"/>
          <line x1="47.8284" y1="2.82843" x2="2.82844" y2="47.8284" stroke="white" stroke-width="8"/>
        </svg>
    </button>

    <div id="menu" class="z-50 fixed inset-0 translate-x-full bg-slate-900 motion-safe:duration-1000 motion-safe:transition-transform
    animate-fadeInDown"
        :class="{ 'translate-x-0': menuOuvert }" v-if="menuOuvert">
          <div class="flex-col text-black text-center text-3xl my-40">
            <button class="z-50 absolute top-6 right-8" aria-haspopup="true" aria-controls="menu" 
                :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
                <svg class="absolute" v-if="!menuOuvert" width="49" height="49" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="url(#pattern0)" d="M0 0h49v49H0z"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_1004_881" transform="scale(.00195)"/></pattern><image id="image0_1004_881" width="512" height="512" xlink:href="data:image/png;base64,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"/></defs></svg>
                <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="2.82843" y1="3.3537" x2="47.8284" y2="48.3537" stroke="white" stroke-width="8"/>
                  <line x1="47.8284" y1="2.82843" x2="2.82844" y2="47.8284" stroke="white" stroke-width="8"/>
                </svg>
            </button>
            <RouterLink to="/" @click="menuOuvert = !menuOuvert">
              <svg class="absolute top-6 left-8" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="60px" height="60px"><path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z"/></svg>
            </RouterLink>
            <RouterLink to="/billeterie" @click="menuOuvert = !menuOuvert">
              <div class="h-24 flex border-2 rounded-xl my-14 mx-10 p-3 bg-white justify-around items-center">
                <img src="./assets/images/ticket.webp" alt="ticket" class="w-16">
                <p class="font-medium">Billeterie</p> 
              </div>
            </RouterLink>
            <RouterLink to="/programme" @click="menuOuvert = !menuOuvert">
              <div class="h-24 flex border-2 rounded-xl my-14 mx-10 p-3 bg-white justify-around items-center">
                <img src="./assets/images/calendar.webp" alt="calendar" class="w-14">
                <p class="font-medium">Programme</p> 
              </div>
            </RouterLink>
            <RouterLink to="/festival" @click="menuOuvert = !menuOuvert">
              <div class="h-24 flex border-2 rounded-xl my-14 mx-10 p-3 bg-white justify-around items-center">
                <img src="./assets/images/micro.png" alt="micro" class="w-16">
                <p class="font-medium">Festival</p> 
              </div>
            </RouterLink>
            <RouterLink to="/artistes" @click="menuOuvert = !menuOuvert">
              <div class="h-24 flex border-2 rounded-xl my-14 mx-10 p-3 bg-white justify-around items-center">
                <img src="./assets/images/artistes.webp" alt="artistes" class="w-16">
                <p class="font-medium">Artistes</p>
              </div>
            </RouterLink>
          </div>
    </div>
  </nav>
  <!--Fin Menu-->
    <RouterView/>
</template>

<script>
import redbuttonVue from './components/redbutton.vue';
import buttonmenuVue from './components/buttonmenu.vue';
import billeterieVue from './components/billeterie.vue';
import formuleVue from './components/formule.vue';

export default{
  name:"",
  data(){
    return{
      menuOuvert:false
    }
  },
  components:{
    redbuttonVue, buttonmenuVue, billeterieVue, formuleVue
  }
}
</script>