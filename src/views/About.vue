<template>
  <div class="about">
    <h1>{{post.title}}</h1>
    <strong>{{post.body}}</strong>
  </div>
</template>

<script>
  import Post from '@/services/models/Post.js'

  export default {
    name: "about",
    data () {
      return {
        post: {}
      }
    },
    methods: {
      loadPost () {
        Post.show(this.$route.params.id).then((response)=> {
          this.post = response.data
        })
      }
    },
    created: function () {
      this.loadPost()
    }
  }
</script>
