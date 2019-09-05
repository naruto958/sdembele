<template>
    <div class="post-c">
        <nuxt-link :to="'/lab/'+ id">
            <article class="post-preview" :style="{ backgroundImage: 'url('+thumbnail+ ')'} ">
                <div class="post-thumbnail">
                    <p>XXXX</p>
                </div>
                <div class="post-content">
                    <h1>{{ title }}</h1>
                    <p>{{ previewText }}</p>
                </div>
            </article>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    name: 'PostPreview',
    props: {
        id:{
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        previewText: {
            type: String,
            required: true,
        },
        thumbnail:{
            type: String,
            required: true,
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/sass/main.scss';
a{
  text-decoration: none;
  color: rgba(87, 167, 41, 1);
}
.post-preview{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover{
      .post-thumbnail{
          transform: scale(1);
          background: rgba(26, 26, 26, 0.3);
          border: .01rem solid rgba(255, 255, 255, 1);
          p{
            opacity: 1;
            visibility: visible;
          }
      }
      .post-content{
      z-index: 2;
      transform: translateY(0rem);
          p{
      color: #fff;
      visibility: visible;
      opacity: 1;
    }
    }

    }
    .post-content{
      z-index: 2;
      transform: translateY(2rem);
      transition: all .4s ease-out;
      padding: 1rem;
          p{
      color: #fff;
      visibility: hidden;
      opacity: 0;
      transition: all .4s ease-out;
    }
    }
    .post-thumbnail{
      background: rgba(26, 26, 26, 0);
      width: 80%;
      height: 80%;
      position: absolute;
      border-left-width: .01rem solid rgba(255, 255, 255, 0);
      transition: all .4s ease-out;
      transform: scale(0);
      p{
        color: #fff;
        background: rgba(129, 129, 129, 0.432);
        width: 100%;
        bottom: 0rem;
        position: absolute;
        padding: .1rem;
        height: 4rem;
        visibility: hidden;
        opacity: 0;
        transition: all .4s ease-out;
      }
      &::before{
        content: '';
        display: block;
        background: rgba(27, 27, 27, 0.5);
        width: 100%;
        height: 100%;
        filter: blur(1px);
      }
    }
    h1{
      @include rfs(2rem);
      padding-bottom: .5rem;

    }

}
.news{
  margin-top: 3rem;
}
</style>