<template>
  <section>
    <h1>Users</h1>

    <p>
      If you want to get contact information to especific user, just select
      group and then select him from the list below.
    </p>

    <div class="filter">
      Select group of users:
      <select>
        <option v-for="option in options" :key="option" :value="option">{{
          option
        }}</option>
      </select>
    </div>

    <div>
      <User v-for="user in users" :key="user.index" :selected="user.selected" />
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
      options: ['hi', 'oh', 'hu'],
      users: [
        { index: 0, selected: false, name: 'Levhita' },
        { index: 1, selected: false, name: 'Anais' },
        { index: 2, selected: false, name: 'Rocio' }
      ]
    }
  }
}
</script>

<style>
select {
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
h1 {
  color: dimgray;
}
p {
  color: gray;
}
div.filter {
  color: dimgray;
  font-weight: bold;
  margin-bottom: 30px;
}
section {
  margin-right: 400px;
  padding: 30px;
}
</style>
