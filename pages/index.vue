<template>
  <div>
    <Details v-if="selectedUser" v-bind="selectedUser" />
    <List :users="users" :groups="groups" @send-user-click="handleUserClick" />
  </div>
</template>

<script>
import axios from 'axios'
import Details from '../components/Details'
import List from '../components/List'

const groups = ['Student', 'Teacher', 'Administrative']
const professions = [
  'Accountant',
  'Actor',
  'Actress',
  'Air Traffic Controller',
  'Architect',
  'Artist',
  'Attorney',
  'Banker',
  'Bartender',
  'Barber',
  'Bookkeeper',
  'Builder',
  'Businessman'
]

export default {
  components: {
    Details,
    List
  },
  asyncData(context) {
    return axios
      .get(
        'https://randomuser.me/api/?seed=Levhita&results=50&inc=name,phone,email,picture'
      )
      .then((res) => {
        const users = res.data.results.map((e, index) => {
          return {
            name: `${e.name.first} ${e.name.last}`,
            group: groups[Math.floor(Math.random() * groups.length)],
            bio:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            profession: professions[Math.floor(Math.random() * groups.length)],
            email: e.email,
            phone: e.phone,
            picture: e.picture,
            index,
            selected: false
          }
        })
        users[0].isSelected = true
        const selectedUser = users[0]

        return { users, selectedUser }
      })
  },
  data() {
    return {
      groups,
      selectedUser: null,
      users: []
    }
  },
  methods: {
    handleUserClick(index) {
      this.users.forEach((user) => (user.isSelected = false))
      this.users[index].isSelected = true
      this.users = [...this.users]
      this.selectedUser = this.users[index]
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
