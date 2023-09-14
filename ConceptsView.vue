<template>
    <div class="myDiv">
      <h2>Task list</h2>
      <input v-model="text"> {{ text }}
      <h2>Checkbox</h2>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">Checked: {{ checked }}</label>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const text = ref('Edit me')
  const checked = ref(false)
  </script>
  
  <style scoped>
  .myDiv {
    border: 5px outset lightgrey;
    background-color: red;
    text-align: center;
    padding: 20px;
    font-size: 2rem;
    color: #333;
    
  }
  </style>
  