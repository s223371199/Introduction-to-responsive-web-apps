<template>
    <div>
      <h2>No Upcoming Projects</h2>
      <div class="line-chart-container">
      <canvas ref="lineChart"></canvas>
    </div>
    </div>
  </template>
  
  <script setup>
  
  import { ref, onMounted } from 'vue'
  import Chart from 'chart.js/auto';
  import ProjectsComponent from '../components/ProjectsComponent.vue'
  
  const projects = ref([])
  
  const fetchProjects = async () => {
    try {
      const response = await fetch('your-json-api-url-here')
      const data = await response.json()
      projects.value = data
    } catch (error) {
      console.error('Error fetching projects data', error)
    }
    
  }
  
  onMounted(fetchProjects)
  </script>
  <style scoped>
  .page-container {
    border: 2px solid #333;
    border-radius: 5px;
    padding: 20px;
    background-color: white;
    margin: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>