<template>
<div id="lsit_dogs">
  <ListImages :images="images" :favourites="favourites" />
  <Loader v-if="loader" />
</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Loader from '@/components/modules/Loader'
import ListImages from '@/components/modules/ListImages'

export default {
  name: 'ListDogs',
  components: {
    Loader,
    ListImages
  },
  watch: {
    '$route' (to, from) {
      this.RESET_IMAGES()
      this.getImages(to.params.breed)
    }
  },
  computed: mapState([
    'images',
    'loader',
    'favourites'
  ]),
  methods: {
    ...mapActions([
      'getRandomImages',
      'getBreedImages'
    ]),
    ...mapMutations([
      'RESET_IMAGES',
      'GET_FAVOURITES',
      'ADD_TO_FAVOURITES',
      'DELETE_FROM_FAVOURITES'
    ]),
    getImages (breed) {
      breed = breed || this.$route.params.breed
      breed ? this.getBreedImages({breed}) : this.getRandomImages()
    },
    infiniteScroll () {
      window.addEventListener('scroll', () => {
        let canLoadData = document.documentElement.scrollTop + window.innerHeight > document.documentElement.offsetHeight - 50
        if (canLoadData && !this.loader) this.getImages()
      })
    },
    changeFavouriteState (url, favouriteIndex) {
      if (favouriteIndex === -1) this.ADD_TO_FAVOURITES(url)
      else this.DELETE_FROM_FAVOURITES(favouriteIndex)
    }
  },
  created () {
    this.RESET_IMAGES()
    this.getImages()
    this.infiniteScroll()
  },
  mounted () {
    this.GET_FAVOURITES()
    this.$on('changeFavouriteState', (url, index) => this.changeFavouriteState(url, index))
  }
}
</script>
