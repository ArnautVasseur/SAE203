<template>
   <select name="program" id="select"  class="bg-red-900 text-white w-full text-center py-2 rounded-xl">
    <option value="" >{{date}}</option>
    <option value="" class="bg-white text-black">{{matin}}</option>
    <option value="" class="bg-white text-black">{{aprèsmidi}}</option>
    <option value="" class="bg-white text-black">{{soir}}</option>
  </select>
</template>

<script>

    export default{
        props:{
            date:String,
            matin:String,
            aprèsmidi:String,
            soir:String
        }
    }

</script>