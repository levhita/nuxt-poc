<template>
  <div>
    <button :class="{ selected }"><img :src="thumbnail" /> {{ name }}</button>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    name: String,
    thumbnail: String,
    selected: Boolean
  }

  /** shortcut, no validation:
   * props:['index', 'name', 'thumbnail', 'selected']
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
   *    selected: Boolean
   *  }
   * **/
}
</script>

<style>
div {
  box-sizing: border-box;
  display: block;
  width: 40%;
  height: 48px;
  margin: 20px 20px;
  width: 250px;
  float: left;
}
button {
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
}

button.selected {
  border: 1px solid grey;
  background: #eee;
}

button:hover {
  border: 1px solid dimgrey;
  cursor: pointer;
  background: #ddd;
}

span {
  display: inline-block;
  vertical-align: middle;
}
img {
  float: left;
  border-radius: 50%;
  margin: -12px 15px -12px 0px;
}
</style>
