<template>
  <div>
    <Details v-bind="selectedUser" />
    <List :users="users" :groups="groups" />
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
      groups: ['Administrative', 'Student', 'Teacher'],
      selectedUser: {
        index: 0,
        selected: false,
        name: 'Levhita',
        group: 'Administrative',
        bio: 'Web developer a free software advocate',
        picture: {
          large:
            'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_400x400.jpg'
        },
        profession: 'Developer',
        email: 'levhita@gmail.com',
        phone: '33-1139-38-63',
        thumbnail:
          'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_bigger.jpg'
      },
      users: [
        {
          index: 0,
          selected: false,
          name: 'Levhita',
          group: 'Administrative',
          thumbnail:
            'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_bigger.jpg'
        },
        {
          index: 1,
          selected: false,
          name: 'Anais',
          group: 'Administrative',
          thumbnail:
            'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_bigger.jpg'
        },
        {
          index: 2,
          selected: false,
          name: 'Rocio',
          group: 'Student',
          thumbnail:
            'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_bigger.jpg'
        }
      ]
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
