<template>
  <div>
	 <transition name="layout" mode="out-in">
      <nuxt />
   </transition>
  </div>
</template>
<style lang="scss">
@import '~/assets/sass/main.scss';
</style>
<script>
import TweenMax from 'gsap'
export default {
 
}
</script>