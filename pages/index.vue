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
    return {
      message: 'Hello World'
    }
  }
}
</script>

<style>
h1 {
  color: red;
}
</style>
