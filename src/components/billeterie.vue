<template>
    <div class="bg-slate-300 w-72 h-40 rounded-2xl">
        <p class="text-center py-5 text-2xl font-bold underline">{{date}}</p>
        <redbutton-vue class="m-auto block">
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
        date:String
    },
    components:{
        redbuttonVue
    }
}
</script>