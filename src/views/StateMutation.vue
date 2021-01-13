<!-- state(상태)와 mutations(변이)의 관계 -->
<template>
  <div>
    <div class="container">
        <ul style="text-align: left">
            <li>Vuex의 <b>State(상태)</b>와 <b>Mutations(변이)</b>의 관계이다.</li>
            <li>State(상태)는 <TextLabel v-bind:msg="stateMsg"/>으로 불러온다.</li>
            <li>Mutations(변이)는 <TextLabel v-bind:msg="mutationsMsg"/>으로 불러온다.</li>
            <li>Mutations(변이)는 methods로 선언되며 동기적으로 작동해야된다.</li>
            <li>Mutations(변이)는 payload로 객체나 값들을 전달시킬 수 있다.</li>
        </ul>
    </div>

    <h1>{{count}}</h1>
    <!-- mutations(변이) 사용-->
    <button @click="$store.commit('stateMutation/increment')">증가</button>
    <button @click="$store.commit('stateMutation/decrement')">감소</button>
    <!-- 페이로드(payload)를 가진 커밋이라 칭한다. -->
    <button @click="$store.commit('stateMutation/increment', 3)">3증가</button>
    <button @click="$store.commit('stateMutation/decrement', 3)">3감소</button>
    <!-- 페이로드 Object -->
    <button @click="$store.commit('stateMutation/objectIncrement', {amount: 10})">오브젝트 10</button>
    <!-- 리셋 -->
    <button @click="$store.commit('stateMutation/resetCount')">리셋</button>

    <div style="margin:10px">
      <img 
      src="@/assets/img/store1.png"
      width="500"
      height="800">
      <img 
      src="@/assets/img/about.png"
      width="750"
      height="800">
    </div>
  </div>
</template>

<script>
import TextLabel from '@/components/TextLabel.vue'

export default {
  components:{
    TextLabel,
  },
  data(){
    return{
      stateMsg: '$store.state.(모듈명).(state명)',
      mutationsMsg: "$store.commit('(모듈명)/(mutation명)')"
    }
  },
  // computed : data속성에 변화가 있을 때 자동으로 다시 연산을 한다.
  // 변화가 있을때만 다시 연산을 하고 한번 연산한 값을 캐싱 해놓았다가 다시 재 사용한다.
  // 반면 methods는 캐싱이라는 개념이 없고 매번 재 렌더링 된다.
  computed:{
    // state(상태) count 변화시 재 연산
    count(){
      return this.$store.state.stateMutation.count
    }
  },
}
</script>

