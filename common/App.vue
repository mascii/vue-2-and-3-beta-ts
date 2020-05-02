<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to v-kansai"/> -->
    <br />
    <div>
      count[0] = {{ state.counts[0] }}<br />
      <button type="button" @click="state.counts[0]++">+</button>
    </div>
    <div>
      count[1] = {{ state.counts[1] }}<br />
      <button type="button" @click="state.counts[1]++">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@@vue@@';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      state: {
        counts: [0, 0]
      }
    }
  }
});
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
