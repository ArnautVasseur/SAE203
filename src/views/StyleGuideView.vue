<template>
    <div class="mx-16 my-10 bg-dark_red p-3 rounded-lg w-auto shadow-xl">
        <h1 class="text-xl text-white dark:text-black text-center font-bold">Guide de style</h1>
    </div>
    <h2 class="ml-16 text-lg font-semibold mb-10 underline">Couleurs</h2>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(180px,180px))] ml-16 mb-16 gap-5">
        <div class="">
            <div class="bg-light_gray w-36 h-36 rounded-t-lg"></div>
            <div class="border-2 border-black dark:border-white w-36 h-10">
                <p class="text-center mt-[7px] dark:text-white">#D1D5DB</p>
            </div>
        </div>

        <div class="">
            <div class="bg-dark_gray w-36 h-36 rounded-t-lg"></div>
            <div class="border-2 border-black dark:border-white w-36 h-10">
                <p class="text-center mt-[7px] dark:text-white">#111827</p>
            </div>
        </div>

        <div class="">
            <div class="bg-light_red w-36 h-36 rounded-t-lg"></div>
            <div class="border-2 border-black dark:border-white w-36 h-10">
                <p class="text-center mt-[7px] dark:text-white">#B91C1C</p>
            </div>
        </div>

        <div class="">
            <div class="bg-dark_red w-36 h-36 rounded-t-lg"></div>
            <div class="border-2 border-black dark:border-white w-36 h-10">
                <p class="text-center mt-[7px] dark:text-white">#7F1D1D</p>
            </div>
        </div>
    </div>
    <h2 class="ml-16 text-lg font-semibold mb-10 underline dark:text-white">Typography</h2>
    <p class="text-xl font-metal-mania ml-16 dark:text-white">Metal Mania | regular | 28 px</p>
    <p class="text-xl font-bold font-mulish ml-16 dark:text-white">Mulish | bold | 28 px</p>
    <p class="text-lg font-medium font-mulish ml-16 dark:text-white">Mulish | semibold | 22 px</p>
    <p class="text-[20px] font-medium font-mulish ml-16 dark:text-white">Mulish | medium | 20 px</p>
    <p class="text-base font-regular font-mulish ml-16 mb-16 dark:text-white">Mulish | regular | 16px</p>

    <h2 class="ml-16 text-lg font-semibold mb-10 underline dark:text-white">Composants</h2>

    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,300px))] gap-6 ml-16">
        <dropdown-vue class="mt-10 font-mulish text-xl"
                date="25 juillet 2023"
                matin="9h-12h: Bon Jovi"
                aprèsmidi="14h-17h: Europe"
                soir="20h-23h: Aerosmith"/>
        <formuleVue
            formule="Formule Complète"
            dates="22-23-24-25 juillet 2023"/>
        <redbuttonVue>
            <slot>
                Réserver
            </slot>
        </redbuttonVue>
        <billeterieVue class="my-10"
                date="23 juillet 2023"/>
    </div>
</template>

<script>
import billeterieVue from '../components/billeterie.vue'
import buttonmenuVue from '../components/buttonmenu.vue'
import dropdownVue from '../components/dropdown.vue'
import formuleVue from '../components/formule.vue'
import redbuttonVue from '../components/redbutton.vue'

export default{
    components:{
        billeterieVue, buttonmenuVue, dropdownVue, formuleVue, redbuttonVue
    },
}
</script>