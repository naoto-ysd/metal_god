<template>
login
</template>

<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      employee: {}
    }
  },
  mounted () {
    axios
        .get(`/api/v1/employees/${this.$route.params.id}.json`)
        .then(response => (this.employee = response.data))
  }
}
</script>

<style scoped>
</style>
