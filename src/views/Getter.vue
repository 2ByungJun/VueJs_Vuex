<template>
    <div>
        <div class="container">
            <ul style="text-align: left">
                <li>Vuex의 <b>getters(게터)</b>의 사용이다.</li>
                <li>getters(게터)는 <TextLabel v-bind:msg="msg"/>으로 불러온다.</li>
                <li>getters(게터)는 computed와 비슷하게 state(상태)값이 변경되면 자동 계산되어 업데이트한다.</li>
            </ul>
        </div>
        <br>

        <h3>post data</h3>
        <p>{{posts}}</p>
        <br>
        <!-- Getters는 posts 상태가 변화됨을 감지하여 계산한 값을 리턴한다.(computed와 비슷) -->
        <p>
            postCount : {{ this.$store.getters['actionMutation/postCount'] }}
        </p>

        <div>
            <img 
            src="@/assets/img/getter.png"
            width="600"
            height="500">
            <img 
            src="@/assets/img/getter-store.png"
            width="700"
            height="500">
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import TextLabel from '@/components/TextLabel.vue'

export default {
    components:{
        TextLabel,
    },
    data(){
        return {
            msg: "this.$store.getters['(모듈명)/(게터명)']"
        }
    },
    computed:{
        ...mapState( 'actionMutation' ,[
            'posts'
        ])
    },
    mounted(){
        this.$store.dispatch('actionMutation/getPostData')
    }
}
</script>

<style>

</style>