<script setup> 
import { ref } from 'vue'

const text = ref (' Edit me ')

</script>
<template>





<div class = "myDiv">
<h1> Task list </h1>
<input v-model= "text"> {{ text }}
<h2> Checkbox</h2>
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox"> Checked: {{ checked }}</label>




</div>

</template>




<style scoped>
    .myDiv {
    border: 5px outset lightgrey;
    background-color: aqua;
    text-align: center;
    padding: 60px;
    }


</style>

  
 










