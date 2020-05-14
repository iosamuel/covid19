<template>
  <div v-if="country">
    <p>Country: {{ country.Country }}</p>
    <p>Confirmed: {{ country.Confirmed }}</p>
    <p>Deaths: {{ country.Deaths }}</p>
    <p>Recovered: {{ country.Recovered }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      country: null
    };
  },
  watch: {
    "$route.params.country": {
      handler(country) {
        fetch(`https://api.covid19api.com/country/${country}`)
          .then(res => res.json())
          .then(data => (this.country = data[data.length - 1]));
      },
      immediate: true
    }
  }
};
</script>

<style>
</style>