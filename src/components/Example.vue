<template lang="html">
  <div>
    <h1>{{dummy}}</h1>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
export default {
  name: 'example',
  data () {
    return {
      dummy: 'Hello from example'
    }
  }
}
</script>

<style lang="css">
</style>
