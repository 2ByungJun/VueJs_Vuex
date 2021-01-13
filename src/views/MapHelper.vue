<template>
    <div>
        <div class="container">
            <ul style="text-align: left">
                <li><TextLabel :msg='msg' />를 선언한다.</li>
            </ul>
        </div>

        <h2>MapState</h2>
        <p>이름 : <span class="bj-span">{{name}}</span></p>
        <p>나이는 올해 <span class="bj-span">{{age}}</span>살 입니다.</p>
        <p>주소는 <span class="bj-span">{{adr}}</span></p>
        <img 
            src="@/assets/img/mapState.png"
            width="600"
            height="600"
        >
        <br>
        <br>
        <h2>MapGetters</h2>
        <p>Getter 결과 : <span class="bj-span">{{postCnt}}</span></p>
        <img 
            src="@/assets/img/mapGetters.png"
            width="600"
            height="500"
        >
        <br>
        <br>
        <h2>MapMutations</h2>
        <h1><span class="bj-span">{{count}}</span></h1>
        <button @click="increment()">증가</button>
        <button @click="decrement()">감소</button>
        <br><br>
        <div>
            <img 
                src="@/assets/img/mapMutations.png"
                width="600"
                height="500"
            >
        </div>
        <br>
        <br>
        <h2>MapActions</h2>
        <p><span class="bj-span">{{comments}}</span></p>
        <button @click="setCommentData()">COMMENT 데이터 불러오기</button>
        <br><br>
        <div>
            <img 
                src="@/assets/img/mapActions.png"
                width="600"
                height="500"
            >
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import TextLabel from '@/components/TextLabel.vue'

export default {
    components: {
        TextLabel,
    },
    data(){
        return{
            msg: "import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'"
        }
    },
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
span.bj-span{
    color: brown;
    font-weight: bold;
}
</style>