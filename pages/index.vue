<template>
  <div>
    <Details v-if="selectedUser" v-bind="selectedUser" />
    <List />
  </div>
</template>

<script>
import Details from '../components/Details'
import List from '../components/List'

export default {
  components: {
    Details,
    List
  },
  fetch({ store, params }) {
    store.dispatch('getUsers')
  },
  computed: {
    selectedUser() {
      return this.$store.state.selectedUser
    }
  }
}
</script>

<style>
body {
  font-size: 18px;
  font-family: Helvetica, Arial, sans-serif;
  /*iPad width, we need a design update for anything < 768px */
  min-width: 768px;
}
</style>
