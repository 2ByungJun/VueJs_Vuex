<template>
    <div>
        <div class="container">
            <ul style="text-align: left">
                <li>모듈화에서는 store의 옵션인 <TextLabel :msg="msg" />를 꼭 활성화해주어야 한다.</li>
            </ul>
        </div>
        <img 
            src="@/assets/img/storeDOM.png"
            width="250"
            height="250"
        >
        <br>
        <br>
        <div class="container">
            <img 
                src="@/assets/img/indexModuling.png" 
                width="700"
                height="600"
                >
        </div>
        <br>
        <img 
        src="@/assets/img/moduling.png" 
        width="800"
        height="1000"
        >
        
        <img 
        src="@/assets/img/moduling-fix.png" 
        width="800"
        height="1000"
        >
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
            msg: 'namespaced: true'
        }
    },
}
</script>

<style>

</style>