<template lang="html">
<h1 class="title">Currency</h1>
 AUD : {{data.AUD}}
</template>

<script>
export default {
  data: function () {
    return {
      data: {}
    }
  },
  computed: {},
  ready: function () {
    this.getApi()
  }, // init function
  attached: function () {},
  methods: {
    getApi: function () {
      this.$http.get('http://api.fixer.io/latest').then(function (res) {
        console.log(res.data)
        this.data = res.data.rates
        console.log(this.data, 'this data')
      })
    }
  },
  components: {}
}
</script>

<style lang="css">
.title {
  color: rgb(204, 78, 78);
}
</style>
