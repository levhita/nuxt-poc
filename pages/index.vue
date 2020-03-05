<template>
  <div>
    <Details></Details>
    <List></List>
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
  data() {
    return {}
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
