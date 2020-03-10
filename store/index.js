import axios from 'axios'

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

export const state = () => ({
  groups,
  selectedUser: null,
  users: []
})

export const mutations = {
  selectUser(state, index) {
    state.users.forEach((user) => (user.isSelected = false))
    state.users[index].isSelected = true
    state.users = [...state.users]
    state.selectedUser = state.users[index]
  },
  setUsers(state, { users, selectedUser }) {
    state.users = users
    state.selectedUser = selectedUser
  }
}

export const actions = {
  async getUsers({ commit }) {
    const data = await axios
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
        const selectedUser = users[0]
        selectedUser.isSelected = true

        return { users, selectedUser }
      })
    commit('setUsers', data)
  }
}
