<template>
<div class="grid">
  <div class="item" v-for="(url, index) in images || favourites" :key="index">
    <img class="item__image" :src="url">
    <div class="item__details">
      <a class="item__details__like" :class="{active: favouriteIndex(url) !== -1}" @click="changeFavouriteState(url)">&#10084;</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ListImages',
  props: {
    images: {
      type: Array,
      required: false
    },
    favourites: {
      type: Array,
      required: true
    }
  },
  methods: {
    changeFavouriteState (url) {
      this.$parent.$emit('changeFavouriteState', url, this.favouriteIndex(url))
    },
    favouriteIndex (url) {
      if (this.favourites) return this.favourites.indexOf(url)
      return -1
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 300px 320px;
  grid-auto-flow: dense;

  .item {
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 8px 1px;
    border-radius: 4px;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      border-radius: 4px;
    }

    &__details {
      position: relative;
      bottom: 52px;
      padding: 0 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.55);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;

      &__like {
        color: #888;
        cursor: pointer;
        text-decoration: none;
        font-size: 36px;
        transition: all 0.3s;
        user-select: none;

        &:hover {
          color: #755;
        }

        &.active {
          color: #d02 !important;
          text-shadow: #faa 0 0 16px;
        }
      }
    }

    @media (min-width: 480px) {
      &:first-child {
        grid-area: 1 / 1 / span 2 / span 2;
      }
      &:nth-child(3n) {
        grid-column: span 2;
      }
    }
  }
}
</style>
