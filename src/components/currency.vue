<template lang="html">
<h1 class="title">Currency</h1>
 {{getState.rates.JPY}}
 <br>
 <button type="button" @click="add(1)">+1</button> {{getNum}}
</template>

<script>
import store from './../vuex/store.js'
import { getApi, add } from './../vuex/actions.js'
import { getState, getNum } from './../vuex/getters.js'
export default {
  store,
  vuex: {
    actions: {
      getApi: getApi,
      add: add
    },
    getters: {
      getState: getState,
      getNum: getNum
    }
  },
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {
    this.getApi()
  }, // init function
  attached: function () {},
  methods: {
    add: function (num) {
      this.add(num)
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
