<template>
<nav id="primary_nav_wrap">
  <ul>
    <router-link tag="li" to="/" active-class="active" exact>
      <a>Главная</a>
    </router-link>
    <li><a>Породы</a>
      <ul class="scrolling-list">
        <router-link tag="li" :to="key" active-class="active" exact v-for="(value, key) in breeds" :key="key">
          <a>{{ key }}</a>
        </router-link>
      </ul>
    </li>
    <router-link tag="li" to="/favourites" active-class="active" exact>
      <a>Избранное</a>
    </router-link>
  </ul>
</nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  computed: mapState([
    'breeds'
  ]),
  created () {
    this.$store.dispatch('getBreeds')
  }
}
</script>

<style lang="scss" scoped>
#primary_nav_wrap {
  margin: 15px 0;
  height: 32px;

  ul {
    list-style: none;
    position: relative;
    float: left;
    margin: 0;
    padding: 0;

    a {
      display: block;
      color: #333;
      text-decoration: none;
      font-weight: 700;
      font-size: 12px;
      line-height: 32px;
      padding: 0 15px;
      font-family: "HelveticaNeue", Helvetica, Arial, sans-serif;
    }

    li {
      position: relative;
      float: left;
      cursor: pointer;
      margin: 0;
      padding: 0;

      &:hover {
        background: #f6f6f6;

        > ul {
          display: block;
          background: #f6f6f6;
          text-transform: capitalize;

          li:hover {
            background: #ddd;
          }
        }
      }

      &.active {
        background: #ddd;
      }
    }

    ul {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background: #fff;
      padding: 0;

      li {
        float: none;
        width: 150px;
      }

      a {
        line-height: 120%;
        padding: 10px 15px;
      }
    }
  }

  .scrolling-list {
    max-height: 340px;
    overflow: auto;

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
      background-color: #f6f6f6;
    }

    &::-webkit-scrollbar {
      width: 4px;
      background-color: #f6f6f6;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #000;
    }
  }
}
</style>
