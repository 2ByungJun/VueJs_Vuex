<!-- state(상태)와 mutations(변이)의 관계 -->
<template>
  <div>
    <div class="about2" style="display: inline-table;">
      <p v-if="isLoading">post 데이터를 가져오는 중입니다 ....</p>
      <ul v-else>
        <li v-for="post in posts" :key="post.id">{{post.title}}</li>
      </ul>
    </div>

    <div>
      <img 
      src="@/assets/img/about2.png"
      width="800"
      >
    </div>
  </div>
</template>

<script>
export default{
  mounted(){
    this.$store.dispatch("getUserPostData")
  },
  computed:{
    isLoading(){
      return this.$store.state.about2.isLoading
    },
    posts(){
      return this.$store.state.about2.posts
    }
  }
}
</script>

