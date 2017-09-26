<template>
  <div>
    <h1>{{ msg }}</h1>
    Hello {{ $route.params.name }}
  </div>
</template>

<script>
  export default {
    name: '2ndRoute',
    data () {
      return {
        msg: '두번째닷!'
      }
    }
  }
</script>
