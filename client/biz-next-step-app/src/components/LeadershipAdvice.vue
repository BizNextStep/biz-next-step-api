<!-- src/components/LeadershipAdvice.vue -->
<template>
  <div>
    <h2>Leadership Advice</h2>
    <p>{{ advice }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      advice: ''
    };
  },
  created() {
    axios.get('https://biz-next-step-api-14c9c398863d.herokuapp.com/api/leadership/advice')
      .then(response => {
        this.advice = response.data.advice;
      })
      .catch(error => {
        console.error('There was an error fetching the advice!', error);
      });
  }
};
</script>

