<template>
  <div>
    <Details v-bind="selectedUser" />
    <List :users="users" :groups="groups" @send-user-click="handleUserClick" />
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
    const users = [
      {
        index: 0,
        isSelected: true,
        name: 'Levhita',
        group: 'Administrative',
        bio: 'web developer and free software advocate',
        picture: {
          large:
            'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_400x400.jpg'
        },
        profession: 'Full Stack Developer',
        email: 'levhita@gmail.com',
        phone: '33-1139-38-63',
        thumbnail:
          'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_bigger.jpg'
      },
      {
        index: 1,
        isSelected: false,
        name: 'Anais',
        group: 'Teacher',
        bio: 'tatoos and feminism',
        picture: {
          large:
            'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_400x400.jpg'
        },
        profession: 'Frontend Developer',
        email: 'anais@gmail.com',
        phone: '33-1139-38-63',
        thumbnail:
          'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_bigger.jpg'
      },
      {
        index: 2,
        isSelected: false,
        name: 'Rocio',
        group: 'Student',
        bio: "I'll find your errors and make you pay",
        picture: {
          large:
            'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_400x400.jpg'
        },
        profession: 'QA',
        email: 'rocio@gmail.com',
        phone: '33-1139-38-63',
        thumbnail:
          'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_bigger.jpg'
      }
    ]

    return {
      groups: ['Administrative', 'Student', 'Teacher'],
      selectedUser: users[0],
      users
    }
  },
  methods: {
    handleUserClick(index) {
      this.users.forEach((user) => (user.isSelected = false))
      this.users[index].isSelected = true
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
