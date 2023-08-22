<script setup> 
import { ref } from 'vue'

const text = ref (' Edit me ')

</script>
<template>





<div class = "myDiv">
<h1> Text Input </h1>
<input v-model= "text"> {{ text }}
<h2> Checkbox</h2>
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox"> Checked: {{ checked }}</label>




</div>

</template>




<style scoped>
    .myDiv {
    border: 5px outset lightgrey;
    background-color: greenyellow;
    text-align: center;
    padding: 60px;
    }


</style>

  
 










