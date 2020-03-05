<template>
  <h2>Hi</h2>
</template>

<script>
export default {
  data() {
    return {
      name: 'levhita'
    }
  }
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
