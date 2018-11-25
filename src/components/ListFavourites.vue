<template>
<div id="lsit_favourites">
  <ListImages :favourites="favourites" />
  <div class="no-favourites" v-if="favourites.length === 0">
    Вы не добавили в избранное ни одного изображения.
  </div>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ListImages from '@/components/modules/ListImages'

export default {
  name: 'ListFavourites',
  components: {
    ListImages
  },
  computed: mapState([
    'favourites'
  ]),
  methods: {
    ...mapMutations([
      'GET_FAVOURITES',
      'DELETE_FROM_FAVOURITES'
    ]),
    deleteFromFavourites (url, favouriteIndex) {
      this.DELETE_FROM_FAVOURITES(favouriteIndex)
    }
  },
  mounted () {
    this.GET_FAVOURITES()
    this.$on('changeFavouriteState', (url, index) => this.deleteFromFavourites(url, index))
  }
}
</script>

<style lang="scss">
.no-favourites {
  text-align: center;
  font-size: 32px;
  padding: 50px 0;
}
</style>
