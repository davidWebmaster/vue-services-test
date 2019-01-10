<template>
  <div class="">
    <h3>Create Post</h3>
    <div style="border: 1px solid #ccc">
      <input type="text" name="" v-model="post.title" placeholder="Title" style="width: 90%">
      <br/>
      <br/>
      <textarea name="name" v-model="post.body" placeholder="Body" rows="8" cols="80"></textarea>
      <br/>
      <br/>
      <input type="button" name="" value="SAVE" @click="savePost" />
    </div>
    <h3>Posts</h3>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <router-link :to="{path: '/about/'+post.id}">{{post.title}}</router-link>
        <button style="background: blue" @click="loadPost(post.id)" type="button" name="button">update</button>
        <button style="background: red" @click="destroyPost(post.id)" type="button" name="button">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Post from '@/services/models/Post.js'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      post: {
        userId: 1,
        title: '',
        body: ''
      },
      posts: []
    }
  },
  methods: {
    loadingPosts () {
      Post.all().then((response) => {
        this.posts = response.data
      })
    },
    store () {
      Post.store(this.post).then((response) => {
        this.loadingPosts()
        this.resetPost()
      }, (error) => {
        console.log(error)
      })
    },
    update () {
      Post.update(this.post).then((response) => {
        this.loadingPosts()
        this.resetPost()
      }, (error) => {
        console.log(error)
      })
    },
    savePost () {
      !this.post.id ? this.store() : this.update()
    },
    resetPost () {
      // reset post
      this.post.id = ''
      this.post.title = ''
      this.post.body = ''
    },
    loadPost (id) {
      Post.show(id).then((response)=> {
        this.post = response.data
      })
    },
    destroyPost (id) {
      Post.destroy(id).then((response) => {
        console.log('deleted!')
        this.loadingPosts()
      }, (error) => {
        console.log(error)
      })
    }
  },
  created: function () {
    this.loadingPosts()
  }
}
</script>
