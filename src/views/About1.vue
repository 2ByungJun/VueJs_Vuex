<!-- vue 반응성 예시 -->
<template>
  <div class="about1">
    <h1>a: {{countObj.a}}</h1>
    <h1>b: {{countObj.b}}</h1>
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
export default{
    // data옵션은 Object.defineProperty를 사용하여 getter/setter로 변환된다.
    data(){
      return{
        countObj:{
          a:0
        }
      }
    }, // countObj.a는 반응적입니다.
    mounted(){      
      //this.countObj["b"] = 0  // countObj.b는 반응적이지 않습니다. (동작 x)
      this.$set(this.countObj, "b", 0) // countObj.b 객체에 반응형 속성을 추가 (동작 o)
    },
    methods: {
      increment(type){
        this.countObj[type]++
      }
    }
}
</script>

