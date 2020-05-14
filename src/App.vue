<template>
  <div id="app">
    <div class="search-container">
      <input
        type="text"
        placeholder="Busca un pais"
        v-model="search"
        @focus="showModal = true"
      />
    </div>
    <div class="countries" v-show="showModal">
      <ul>
        <li v-for="country in countries" :key="country.Slug">
          <router-link @click.native="showModal = false" :to="country.Slug">
            {{ country.Country }}
          </router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fetched_countries: [],
      search: "",
      showModal: false
    };
  },
  created() {
    fetch("https://api.covid19api.com/countries")
      .then(res => res.json())
      .then(data => (this.fetched_countries = data));
  },
  computed: {
    countries() {
      return this.fetched_countries.filter(country => {
        const countryLowerCase = country.Country.toLowerCase();
        const searchLowerCase = this.search.toLowerCase();
        return countryLowerCase.includes(searchLowerCase);
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.countries {
  position: relative;
}

.countries ul {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-height: 140px;
  background: white;
  overflow-y: auto;
  list-style-type: none;
  box-shadow: 1px 1px 1px 1px;
}
</style>
