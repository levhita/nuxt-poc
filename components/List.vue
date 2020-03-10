<template>
  <section class="list">
    <h1>Users</h1>

    <p>
      If you want to get contact information to especific user, just select
      group and then select him from the list below.
    </p>

    <div class="filter">
      Select group of users:
      <select @change="handleGroupSelection">
        <option v-for="group in groups" :key="group" :value="group">{{
          group
        }}</option>
      </select>
    </div>

    <div class="users">
      <User v-for="user in users" :key="user.index" v-bind="user" />
    </div>
  </section>
</template>

<script>
import User from './User'

export default {
  components: {
    User
  },
  data() {
    return {
      selectedGroup: 'Administrative'
    }
  },
  computed: {
    groups() {
      return this.$store.state.groups
    },
    users() {
      const users = this.$store.state.users || []
      return users.filter((user) => user.group === this.selectedGroup)
    }
  },
  methods: {
    handleGroupSelection(event) {
      this.selectedGroup = event.target.value
    }
  }
}
</script>

<style lang="scss">
section.list {
  margin-right: 400px;
  padding: 30px;

  > h1 {
    color: dimgray;
  }
  p {
    color: gray;
  }
  > .filter {
    color: dimgray;
    font-weight: bold;
    margin-bottom: 30px;

    > select {
      margin-left: 30px;
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 48px;
      color: dimrey;
      border: 1px solid grey;
      font-size: 18px;
      border-radius: 4px;
      padding-right: 60px;
      padding-left: 15px;

      background-image: linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%),
        linear-gradient(to right, #ccc, #ccc);
      background-position: calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
      background-size: 5px 5px, 5px 5px, 1px 1.5em;
      background-repeat: no-repeat;
    }
  }
}
</style>
