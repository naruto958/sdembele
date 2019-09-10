<template>
  <div>
  </div>
</template>
<script>
import TweenMax from 'gsap'
export default {
data() {
    return {
      structuredData: {
  "@context": "http://www.schema.org",
  "@type": "WebSite",
  "name": "sdembele",
  "alternateName": "dembele",
  "url": "https://sdembele.me"
},
    }
  },
    head () {
    return {
      title: 'Souleymane Dembele Website',
      meta: [
        { hid: 'description',
         name: 'description',
          content: 'Welcome to the official website of Souleymane Dembele, a fullstack web developer in Olympia, WA' }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }]
    }
  },
layout: 'homePageLayout',
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
	console.log('enter soul');
      TweenMax.from(el, .5, {
        x: window.innerWidth,
        transformOrigin: '50% 50%',
        ease: Sine.easeOut
      })
      done()
    },
    leave (el, done) {
      TweenMax.to(el, 1, {
        x: 0,
        transformOrigin: '50% 50%',
        ease: Back.easeIn
      })
      done()
    }
  },
}

</script>
<style lang="scss">
</style>
