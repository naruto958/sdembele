<template>
    <section class="feature-posts">
      <PostPreview 
      v-for="post in posts" 
      :key="post.id"
      :id="post.id" 
      :title="post.title" 
      :previewText="post.previewText"  
      :thumbnail="post.thumbnail"/>
    </section>
</template>
<script>
import PostPreview from "~/components/lab/PostPreview.vue";
export default {
    name: 'PostList',
    props:{
        posts: {
            type: Array,
            required: true,
        }
    },
    components: {
    PostPreview,
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/sass/main.scss';
.feature-posts{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
  @include breakpoint(xs){
    grid-template-columns: repeat(auto-fit, minmax(50vw, 1fr));
  }
  grid-auto-rows: 30vh;
  column-gap: 1rem;
  row-gap: 1rem;
}

</style>