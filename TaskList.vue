<template>
    <div>
      <h2>Tasks</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['tasks'],
  };
  </script>
  