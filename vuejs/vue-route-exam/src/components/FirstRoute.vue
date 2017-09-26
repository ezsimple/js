<template>
  <div>
    <h1>{{ msg }}</h1>
    Hello {{ $route.params.name }}
  </div>
</template>

<script>
  export default {
    name: '1stRoute',
    data () {
      return {
        msg: '첫경험'
      }
    }
  }
</script>
