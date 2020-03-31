<template>
  <div id="app">
    <pintData msg="Hello Vue in CodeSandbox!"/>
  </div>
</template>

<script>
import pintData from "./components/printData";

export default {
  name: "App",
  components: {
    pintData
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
