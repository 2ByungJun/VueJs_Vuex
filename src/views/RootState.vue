<template>
    <div>
        <div class="container">
            <ul style="text-align: left">
                <li><b>외부 store에 대한 actions, mutications를 사용</b>하려면 이미지와 같이 선언된다.</li>
                <li><b>외부 store에 대한 state를 사용</b>하려면 <b>rootState를 사용</b>하면 된다.</li>
                <li><b>rootState</b>는 <TextLabel :msg='msg'/> 로 사용한다.</li>
                <li><b>첫 번째 인자</b>로는 <TextLabel :msg='msg2'/>가 존재합니다.</li>
            </ul>
        </div>

        <img 
        src="@/assets/img/rootState.png" 
        width="800"
        height="500"
        >
        <img 
        src="@/assets/img/root.png" 
        width="800"
        height="500"
        >
    </div>
</template>

<script>
import TextLabel from '@/components/TextLabel.vue'

export default {
    components:{
        TextLabel,
    },
    data(){
        return {
            msg: 'rootState.(모듈명).(데이터)',
            msg2: '{state, commit, dispatch, getters, rootState, rootGetters}'
        }
    }
}
</script>

<style>

</style>