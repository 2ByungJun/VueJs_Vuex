<template>
  <div>
      <div class="container">
        <ul style="text-align: left">
            <li>Vuex의 <b>actions(액션)</b>과 <b>Mutations(변이)</b>의 관계이다.</li>
            <li>actions(액션)은 <TextLabel v-bind:msg="msg"/>으로 불러온다.</li>
            <li>actions(액션)은 모두 비동기적으로 진행된다.</li>
            <li>actions(액션)이 결과 반영을 위해 commit으로 mutations(변이)을 진행한다.</li>
        </ul>
    </div>
    <br>
    <div class="container">
      <p v-if="isLoading">post 데이터를 가져오는 중입니다 ....</p>
      <ul v-else style="text-align: left">
        <li>id : {{posts.id}}</li>
        <li>title : {{posts.title}}</li>
        <li>content : {{posts.content}}</li>
        <!-- <li v-for="post in posts" :key="post.id">{{post.title}}</li> -->
      </ul>
    </div>

    <div>
      <img 
      src="@/assets/img/about2.png"
      width="900"
      height="1500"
      >
    </div>
  </div>
</template>

<script>
import TextLabel from '@/components/TextLabel.vue'

export default {
  components:{
    TextLabel
  },
  data(){
    return {
      msg : "this.$store.dispatch('(모듈명)/(actions)')"
    }
  },
  mounted(){
    this.$store.dispatch("actionMutation/getUserPostData")
  },
  computed:{
    isLoading(){
      return this.$store.state.actionMutation.isLoading
    },
    posts(){
      return this.$store.state.actionMutation.posts
    },
  }
}
</script>

