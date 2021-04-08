<template>
  <div id="app" class="container">
    <br>
    <div class="card">
      <h2 style="margin-top:10px">BBANG-JUN</h2>
      <b-button-group>
        <b-button variant="outline-primary" @click="onVelog">
          <b-icon icon="person-circle"></b-icon> Velog
        </b-button>
        <b-button variant="outline-primary" @click="onGitHub">
          <b-icon icon="github"></b-icon> Github
        </b-button>
        <b-button variant="outline-primary" @click="onFacebook">
          <b-icon icon="facebook"></b-icon> Facebook
        </b-button>
    </b-button-group>
    </div>

    <div id="nav">
      <router-link to="/">1. Vuex</router-link> |
      <router-link to="/stateMutation">2. 상태-변이</router-link> |
      <router-link to="/reative">3. 반응성</router-link> |
      <router-link to="/actionMutation">4. 액션-변이</router-link> |
      <router-link to="/getter">5. 게터(Getter)</router-link> |
      <router-link to="/moduling">6. 모듈화</router-link> |
      <router-link to="/rootState">7. RootState(Store간)</router-link> |
      <router-link to="/mapHelper">8. MapHelper</router-link> | 
      <router-link to="/textLabel"> <TextLabel :msg="'+ TextLabel Tip'" /></router-link> 
    </div>
    
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import TextLabel from '@/components/TextLabel.vue'

export default {
  components: {
    TextLabel,
  },
  methods : {
    onVelog(){
      window.open('https://velog.io/@ieed0205/about')
    },
    onGithub(){
      window.open('https://github.com/2ByungJun/VueJs_Vuex')
    },
    onFacebook(){
      window.open('https://www.facebook.com/profile.php?id=100006057602357')
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

ul{
  margin-left: 80px;
}
</style>