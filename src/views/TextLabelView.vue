<template lang="">
    <div>
        <div style="display: inline-grid;">
            <TextLabel :msg="'default 타입입니다.'" />
            <TextLabel :msg="'primary 타입입니다.'" :variant="'primary'"/>
            <TextLabel :msg="'secondary 타입입니다.'" :variant="'secondary'"/>
            <TextLabel :msg="'success 타입입니다.'" :variant="'success'"/>
            <TextLabel :msg="'danger 타입입니다.'" :variant="'danger'"/>
            <TextLabel :msg="'info 타입입니다.'" :variant="'info'"/>
            <TextLabel :msg="'light 타입입니다.'" :variant="'light'"/>
            <TextLabel :msg="'dark 타입입니다.'" :variant="'dark'"/>
        </div>
        <div>
            <img 
            src="@/assets/img/textLabel.png"
            width="750"
            height="800">
            <img 
            src="@/assets/img/textLabel-view.png"
            width="750"
            height="800">
        </div>
    </div>
</template>
<script>
import TextLabel from '../components/TextLabel.vue'

export default {
    components: {
        TextLabel,
    }
}
</script>

<style scoped>
span{
    margin: 10px
}
</style>