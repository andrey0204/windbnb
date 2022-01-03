<template>
  <div id="app">
    <px-nav />
    <Pxsearch />
  </div>
</template>

<script>
import PxNav from "@/components/PxNav";
import Pxsearch from "@/components/Pxsearch";

export default {
  name: "App",
  components: {
    PxNav,
    Pxsearch,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
</style>
