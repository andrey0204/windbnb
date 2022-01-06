<template>
  <div class="nav">
    <div class="nav-img">
      <img src="@/assets/logo.png" />
    </div>
    <div class="nav-search-container">
        <div class="nav-search" @click="openSearchModal">
          <span class="nav-span">{{ filterLocation }}</span>
          <span class="nav-span">{{ filterGuets }}</span>
          <font-awesome-icon icon="search" />
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['filterLocation', 'filterGuets'])
  },
  methods: {
    openSearchModal () {
      this.$store.commit('setShowSearchModal', true)
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,100;1,300&display=swap");

/* * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
} */

.nav {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  width: 100%;
  position: sticky;
  z-index: 1;
  top: 0;
  padding: 20px 0;
}

.nav-search {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: solid 2px black;
  padding: 5px;
  height: 45px;
  width: 300px;
  border-radius: 14px;
  box-shadow: 0px 4px 13px -2px rgb(0, 0, 0,0.2);
}

.nav-span::after{
    content: " |";
}
.nav-span{
    color: rgb(117, 117, 117);
    font-size: 12px;
}

.nav-search-container {
    width: fit-content;
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 465px) {
    .nav-search-container {
        width: 100%;
    }
    .nav-search {
        margin: 0 20px;
    }
}

</style>
