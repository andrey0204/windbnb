<template>
  <div class="search" :class="{ hidden: !showModal }">
    <div class="times" @click="closeModal">
      <font-awesome-icon icon="times" />
    </div>
    <div class="search-secondary">
      <div>
        <div class="search-location">
          <span class="text-location">LOCATION</span>
          <span class="text-add">{{ location }}</span>
        </div>
        <div class="search-content">
          <div class="search-list">
            <ul class="list">
              <li class="list-one"  @click="location = Helsinki">
                <font-awesome-icon icon="map-marker-alt" />
                <span class="text-one">Helsinki, Finland</span>
              </li>
              <li class="list-one" @click="location = Turku">
                <font-awesome-icon icon="map-marker-alt" />
                <span class="text-one">Turku, Finland</span>
              </li>
              <li class="list-one" @click="location = Oulu">
                <font-awesome-icon icon="map-marker-alt" />
                <span class="text-one">Oulu, Finland</span>
              </li>
              <li class="list-one" @click="location = Vaasa">
                <font-awesome-icon icon="map-marker-alt" />
                <span class="text-one">Vaasa, Finland</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="search-guests">
          <span class="text-location">GUESTS</span>
          <span class="text-add">{{ total }}</span>
        </div>
        <div class="search-capacity">
          <div class="search-number">
            <span class="text-location">Adults</span>
            <span class="text-add">Ages 13 or above</span>
            <div class="input-buttom">
              <button class="buttom" @click="alterCount('num1', 1)">+</button>
              <input
                type="text"
                class="input"
                v-model.number="num1"
                v-if="num1 >= 0"
              />
              <button class="buttom" @click="alterCount('num1', -1)">-</button>
            </div>
          </div>
          <div class="search-number">
            <span class="text-location">Children</span>
            <span class="text-add">Ages 2-12</span>
            <div class="input-buttom">
              <button class="buttom" @click="alterCount('num', 1)">+</button>
              <input
                type="text"
                class="input"
                v-model.number="num"
                v-if="num >= 0"
              />
              <button class="buttom" @click="alterCount('num', -1)">-</button>
            </div>
          </div>
        </div>
      </div>
      <div class="search-responsi-icon">
        <div class="search-icon" @click="applyFilters">
          <font-awesome-icon icon="search" />
          <span class="text-search">search</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      num: 0,
      num1: 0,
      location: 'Add location',
      Helsinki: "Helsinki, Finland",
      Turku: "Turku, Finland",
      Oulu: "Oulu, Finland",
      Vaasa: "Vaasa, Finland",
    };
  },
  computed: {
    showModal() {
      return this.$store.state.showSearchModal;
    },
    total() {
      let total = (this.num + this.num1)
      if (total) {
        return total +  ' Guets'
      }
      return 'Add Guest'
    },
    totalNumber () {
      return (this.num + this.num1)
    }
  },

  methods: {
    closeModal() {
      this.$store.commit("setShowSearchModal", false);
    },
    alterCount(num, add) {
      if (num === 'num') {
        this.num += add
        if (this.num < 0) {
          this.num = 0
        }
      }
      if (num === 'num1') {
        this.num1 += add
        if (this.num1 < 0) {
          this.num1 = 0
        }
      }
    },
    applyFilters () {
      this.$store.commit('setFilters', {
        filterLocation: this.location,
        filterGuets: this.total,
        filterGuetsNumber: this.totalNumber
      })
      this.closeModal()
    }
  },
};
</script>

<style>
.search {
  /* margin-top: 50px; */
  /* border: solid 1px rgb(255, 0, 0); */
  min-height: 350px;
  width: 100%;
  flex-wrap: wrap;
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: rgb(255, 255, 255);
  overflow-y: scroll;
  max-height: 100vh;
}

.search.hidden {
  display: none;
}

.search-secondary {
  /* margin-top: 10px; */
  display: flex;
  justify-content: space-around;
}

.search-location {
  border: solid 1px rgb(0, 0, 0);
  border-radius: 14px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 4px 13px -2px rgb(0, 0, 0, 0.2);
  height: 50px;
}

.search-guests {
  border: solid 1px rgb(0, 0, 0);
  border-radius: 14px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 4px 13px -2px rgb(0, 0, 0, 0.2);
  height: 50px;
}

.search-icon {
  border: none;
  border-radius: 14px;
  background-color: rgb(233, 66, 0);
  color: white;
  width: 130px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 13px -2px rgb(0, 0, 0, 0.2);
  align-items: center;
  height: 45px;
}

.text-location {
  font-weight: bold;
  font-size: 10px;
}

.text-add {
  font-size: 12px;
  color: rgb(117, 117, 117);
}

.text-search {
  margin-left: 10px;
}

.times {
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  margin-top: 10px;
}

.search-content {
  display: flex;
  margin-top: 35px;
  margin-left: 15px;
}

.list {
  list-style: none;
}

.list-one {
  margin-bottom: 25px;
  cursor: pointer;
}

.text-one {
  font-size: 12px;
  color: rgb(117, 117, 117);
  margin-left: 15px;
}

.buttom {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: solid 1px black;
}
.buttom:hover {
  background-color: black;
  color: aliceblue;
}

.input {
  width: 35px;
  height: 20px;
  border: none;
  outline: none;
  text-align: center;
}

.search-number {
  display: flex;
  flex-direction: column;
  margin-top: 35px;
}

.input-buttom {
  margin-top: 10px;
}

.search-capacity {
  margin-left: 15px;
}

@media screen and (max-width: 800px) {
  .search-secondary {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .search-responsi-icon {
    margin-top: 40px;
  }
}
</style>
