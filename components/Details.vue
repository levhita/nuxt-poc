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

<style lang="scss">
section.details {
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  float: right;
  border-left: 1px solid gray;
  padding: 0;
  > div.intro {
    text-align: center;
    color: gray;
    padding: 0;
    height: 300px;
    overflow: hidden;
    h1 {
      font-size: 22px;
    }
    > p {
      font-size: 18px;
    }
    > div.back {
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
    img.detail {
      border: 4px solid white;
      border-radius: 50%;
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
  > div.details {
    background: white;
    padding: 5px;
    > dl {
      padding: 0;
      margin: 0;
      margin: 1em;
      > dt {
        color: gray;
        font-size: 14px;
      }
      > dd {
        margin: 10px 0 30px 0;
        color: #222;
      }
    }
  }
}
</style>
