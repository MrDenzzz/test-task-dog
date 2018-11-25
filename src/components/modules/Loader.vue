<template>
<div class="loader_wrap">
  <div class="loader"></div>
</div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss" scoped>
.loader_wrap {
  overflow: hidden;
  display: flex;
  padding: 50px;

  .loader {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-radius: 50%;
    border: 4px solid rgba(0, 0, 0, 0.5);
    border-top: 4px solid rgba(0, 0, 0, 0);
    transform: translateZ(0);
    animation: circle-loader 1s infinite linear;
  }
}

@keyframes circle-loader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
