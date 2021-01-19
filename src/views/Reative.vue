<!-- vue 반응성 예시 -->
<template>
  <div>
    <div class="container">
        <ul style="text-align: left">
            <li>Vue에서는 반응적인지 아닌지가 중요하다.</li>
            <li>Vue의 <b>data옵션</b>은 Object.defineProperty를 사용하여 <b>getter/setter로 변환</b>된다.</li>
            <li><b>getter/setter로 선언되어야 반응적</b>이다고 한다.</li>
            <li>외부 요소를 반응적이게 변경하는 옵션은 <TextLabel v-bind:msg="msg" />이 있다.</li>
            <li><b>created()</b>와 <b>mounted()</b>의 차이도 보여줄 수 있다.</li>
        </ul>
    </div>
    <h1>{{countObj}}</h1>
    <button @click="increment('a')">a증가</button>
    <button @click="increment('b')">b증가</button>

    <div style="margin:10px">
      <img 
      src="@/assets/img/about1.png"
      width="700"
      height="900">
    </div>
  </div>
</template>

<script>
import TextLabel from '@/components/TextLabel.vue'

export default {
    components:{
      TextLabel,
    },
    // data옵션은 Object.defineProperty를 사용하여 getter/setter로 변환된다.
    data(){
      return{
        countObj:{
          a:0
        },
        msg: 'this.$set((데이터), (키), (값))'
      }
    }, // countObj.a는 반응적입니다.
    created(){      
      this.countObj["b"] = 0  // countObj.b는 반응적이지 않습니다. (동작 x)
      //this.$set(this.countObj, "b", 0) // countObj.b 객체에 반응형 속성을 추가 (동작 o)
    },
    methods: {
      increment(type){
        this.countObj[type]++
      }
    }
}
</script>

