<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Biz Next Step App</h1>
    <LeadershipAdvice />
    <TaskScheduler />
  </div>
</template>

<script>
import LeadershipAdvice from './components/LeadershipAdvice.vue';
import TaskScheduler from './components/TaskScheduler.vue';

export default {
  name: 'App',
  components: {
    LeadershipAdvice,
    TaskScheduler
  }
};
</script>

