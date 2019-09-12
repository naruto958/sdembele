<template>
  <div class="container">
    <p class="p-title">Contact</p>
  </div>
</template>
<script>
export default {
  transition: {
    mode: 'out-in',
    css: false,
    beforeEnter (el) {
		console.log('before');
      TweenMax.set(el, {
        transformPerspective: 600,
        perspective: 300,
        x:0,
        transformStyle: 'preserve-3d'
      })
    },
    enter (el, done) {
	console.log('enter');
      TweenMax.from(el, .5, {
        scale: 0,
        transformOrigin: '50% 50%',
        ease: Sine.easeOut,
        onComplete: done()
      })
      
    },
    beforeLeave (el,) {
      TweenMax.to(el, 1, {
        scale: 0,
        transformOrigin: '50% 50%',
        ease: Back.easeIn
      })
    },
    leave (el, done) {
      TweenMax.to(el, 1, {
        scale: 0,
        transformOrigin: '50% 50%',
        ease: Back.easeIn,
        onComplete: done()
      })
      
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
