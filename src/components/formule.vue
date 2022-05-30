<template>
    <div class="bg-gray-700 text-white text-center py-6 font-bold text-2xl w-full h-56 rounded-2xl">
        <p class="my-3 underline">{{formule}}</p>
        <p class="mb-7">{{dates}}</p>
        <redbutton-vue class="mb-6">
            <slot>
                Réserver
            </slot>
        </redbutton-vue>
    </div>
</template>

<script>
import redbuttonVue from '../components/redbutton.vue';

export default{
    props:{
        dates:String,
        formule:String
    },
    components:{
        redbuttonVue
    }
}
</script>