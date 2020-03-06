<template>
  <section class="details">
    <div class="intro">
      <div class="back" :style="{ backgroundImage: `url(${picture.large})` }" />
      <img class="detail" :src="picture.large" />
      <h1>{{ name }}</h1>
      <p>{{ group }}</p>
    </div>

    <div class="details">
      <dl>
        <dt>Short Bio</dt>
        <dd>{{ bio }}</dd>
        <dt>Profession</dt>
        <dd>{{ profession }}</dd>
        <dt>Email</dt>
        <dd>{{ email }}</dd>
        <dt>Phone</dt>
        <dd>{{ phone }}</dd>
      </dl>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    picture: Object,
    name: String,
    group: String,
    bio: String,
    profession: String,
    email: String,
    phone: String
  }
}
</script>

<style>
section.details {
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  float: right;
  border-left: 1px solid gray;
  padding: 0;
}

section.details > div.intro {
  text-align: center;
  color: gray;
  padding: 0;
  height: 300px;
  overflow: hidden;
}
section.details > div.intro > h1 {
  font-size: 22px;
}
section.details > div.intro > p {
  font-size: 18px;
}

section.details > div.intro > div.back {
  position: absolute;
  height: 330px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: blur(8px) brightness(70%);
  -webkit-filter: blur(8px) brightness(70%);
  z-index: -1;
}

section.details img.detail {
  border: 4px solid white;
  border-radius: 50%;
  margin-top: 40px;
  margin-bottom: 20px;
}

section.details > div.details {
  background: white;
  padding: 5px;
}
section.details > div.intro > dl {
  padding: 0;
  margin: 0;
  margin: 1em;
}
section.details > div.intro > dt {
  color: gray;
  font-size: 14px;
}
section.details > div.intro > dd {
  margin: 10px 0 30px 0;
  color: #222;
}
</style>
