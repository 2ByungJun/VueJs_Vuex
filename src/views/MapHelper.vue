<template>
    <div>
        <h2>MapState</h2>
        <p>이름 : <span>{{name}}</span></p>
        <p>나이는 올해 <span>{{age}}</span>살 입니다.</p>
        <p>주소는 <span>{{adr}}</span></p>
        <br>
        <br>
        <h2>MapGetters</h2>
        <p>Getter 결과 : <span>{{postCnt}}</span></p>
        <br>
        <br>
        <h2>MapMutations</h2>
        <h1><span>{{count}}</span></h1>
        <button @click="increment()">증가</button>
        <button @click="decrement()">감소</button>
        <br>
        <br>
        <h2>MapActions</h2>
        <p><span>{{comments}}</span></p>
        <button @click="setCommentData()">COMMENT 데이터 불러오기</button>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    // 기존 코드
    // name(){
    //     return this.$store.state.mapState.name
    // },
    // age(){
    //     return this.$store.state.mapState.age
    // }
    // MapState
    // MapGetters
    computed: {
        // 같은 명칭인 경우
        ...mapState('mapHelper',[
            'name',
            'age',
        ]),
        ...mapState('stateMutation',[
            'count',
        ]),
        ...mapState('comment',[
            'comments'
        ]),
        // 이름을 컴포넌트 내에서 부여하는 경우
        ...mapState('mapHelper',{
            adr: 'address'
        }),
        // MapGetters
        ...mapGetters('actionMutation',{
            postCnt : 'postCount'
        }),
    },
    // MapMutations
    // MapActions
    methods: {
        // 메서드에 선언해주어야한다.
        ...mapMutations('stateMutation',{
            increment: 'increment',
            decrement: 'decrement',
        }),
        ...mapActions('comment',[
            'setCommentData'
        ])
    }
}
</script>

<style scoped>
span{
    color: blueviolet;
    font-weight: bold;
}
</style>