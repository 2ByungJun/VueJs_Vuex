<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">1. Vuex</router-link> |
      <router-link to="/stateMutation">2. 상태-변이</router-link> |
      <router-link to="/reative">3. 반응성</router-link> |
      <router-link to="/actionMutation">4. 액션-변이</router-link> |
      <router-link to="/getter">5. 게터(Getter)</router-link> |
      <router-link to="/moduling">6. 모듈화</router-link> 
    </div>
    <router-view/>
  </div>
</template>

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
</style>
