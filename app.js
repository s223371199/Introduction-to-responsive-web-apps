const app = Vue.createApp({
  data() {
    return {
      goals: [],
      newGoal: {
        title: '',
        description: '',
        deadline: '',
      },
      tasks: [],
      newTask: {
        title: '',
        dueDate: '',
      },
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
    addTask() {
      if (this.newTask.title && this.newTask.dueDate) {
        this.tasks.push({ id: Date.now(), ...this.newTask });
        this.newTask = {
          title: '',
          dueDate: '',
        };
        this.updateTaskPieChart();
      }
    },
    // Other methods

    updateTaskPieChart() {
      // Logic to update the task pie chart
      // You can use Chart.js to create and update the pie chart here
      const taskPieChartCanvas = document.getElementById('taskPieChart').getContext('2d');
      const taskData = this.tasks.reduce((acc, task) => {
        acc[task.title] = acc[task.title] ? acc[task.title] + 1 : 1;
        return acc;
      }, {});
      const taskLabels = Object.keys(taskData);
      const taskCounts = Object.values(taskData);

      new Chart(taskPieChartCanvas, {
        type: 'pie',
        data: {
          labels: taskLabels,
          datasets: [
            {
              data: taskCounts,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
            },
          ],
        },
      });

      // Update total goals and total learning hours
      document.getElementById('totalGoals').textContent = this.goals.length;
      document.getElementById('totalLearningHours').textContent = this.totalLearningHours;
    },
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

    // Create the initial task pie chart
    this.updateTaskPieChart();
  },
});

app.mount('#app');
