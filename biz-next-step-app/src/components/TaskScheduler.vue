<!-- src/components/TaskScheduler.vue -->
<template>
  <div>
    <h2>Task Scheduler</h2>
    <form @submit.prevent="scheduleTask">
      <input type="text" v-model="task" placeholder="Task" />
      <input type="date" v-model="dueDate" />
      <button type="submit">Schedule Task</button>
    </form>
    <p v-if="responseMessage">{{ responseMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      task: '',
      dueDate: '',
      responseMessage: ''
    };
  },
  methods: {
    scheduleTask() {
      axios.post('https://biz-next-step-api-14c9c398863d.herokuapp.com/api/tasks/schedule', {
        task: this.task,
        dueDate: this.dueDate
      })
      .then(response => {
        this.responseMessage = response.data.message;
        this.task = '';
        this.dueDate = '';
      })
      .catch(error => {
        console.error('There was an error scheduling the task!', error);
      });
    }
  }
};
</script>

