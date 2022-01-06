<template>
  <div id="app">
    <px-nav />
    <px-search />
    <Content />
  </div>
</template>

<script>
import PxNav from "@/components/PxNav";
import PxSearch from "@/components/Pxsearch";
import Content from '@/components/content.vue'

export default {
  name: "App",
  components: {
    PxNav,
    PxSearch,
    Content,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
#app {
  --nav-h: 85px;
  --padding-x: 50px;
}
#app {
  height: 100vh;
  padding: 0 var(--padding-x) 0  var(--padding-x);
}
</style>
