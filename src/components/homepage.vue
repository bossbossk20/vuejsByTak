<template lang="html">
  <div>
  <p>
    <!-- use v-link directive for navigation. -->
    <a v-link="{ path: '/com1' }">Go to com1</a>
    <a v-link="{ path: '/com2' }">Go to com2</a>
    <a v-link="{ path: '/currency'}"> Goto currency</a>
  </p>
  <!-- route outlet -->
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
