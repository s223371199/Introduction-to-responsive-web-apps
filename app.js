const app = Vue.createApp({
    data() {
      return {
        goals: [],
        newGoal: {
          title: '',
          description: '',
          deadline: '',
        },
        learningActivities: [],
      };
    },
    computed: {
      totalLearningHours() {
        return this.learningActivities.reduce((total, activity) => total + activity.hours, 0);
      },
    },
    methods: {
      addGoal() {
        this.goals.push({ ...this.newGoal });
        this.newGoal = {
          title: '',
          description: '',
          deadline: '',
        };
      },
      addLearningActivity() {
        // Logic to add a new learning activity
      },
      // Other methods
    },
    mounted() {
      // Create a sample progress chart using Chart.js
      const ctx = document.getElementById('progressChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            {
              label: 'Learning Hours',
              data: [5, 10, 12, 20],
              borderColor: '#3498db',
              backgroundColor: 'rgba(52, 152, 219, 0.2)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },
  });
  
  app.mount('#app');
  