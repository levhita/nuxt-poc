<template>
  <div class="user">
    <button :class="{ selected: isSelected }" @click="handleClick">
      <img :src="picture.thumbnail" /> {{ name }}
    </button>
  </div>
</template>

<script>
export default {
  /** shortcut, no validation:
   * props:['index', 'name', 'thumbnail', 'isSelected']
   * **/

  /** expanded, defaults and required fields
   *  props: {
   *    index: {
   *      type: Number,
   *      required: true,
   *      default: 0
   *    }
   *    name: String,
   *    thumbnail: String,
   *    isSelected: Boolean
   *  }
   * **/
  props: {
    index: Number,
    name: String,
    picture: Object,
    isSelected: Boolean
  },
  methods: {
    handleClick() {
      this.$store.commit('selectUser', this.index)
    }
  }
}
</script>

<style lang="scss">
div.user {
  box-sizing: border-box;
  display: block;
  width: 40%;
  height: 48px;
  margin: 20px 20px;
  width: 250px;
  float: left;

  > button {
    font-size: 18px;
    width: 250px;
    height: 50px;
    border: none;
    box-sizing: border-box;
    border-radius: 24px;
    background: white;
    display: inline-block;
    text-align: left;
    padding: 12px 0px;

    &.selected {
      border: 1px solid grey;
      background: #eee;
    }
    &:hover {
      border: 1px solid dimgrey;
      cursor: pointer;
      background: #ddd;
    }
    > span {
      display: inline-block;
      vertical-align: middle;
    }
    > img {
      float: left;
      border-radius: 50%;
      margin: -12px 15px -12px 0px;
    }
  }
}
</style>
