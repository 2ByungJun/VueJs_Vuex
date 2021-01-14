<template>
    <b-badge pill :variant="variantType" >{{msg}}</b-badge>
</template>

<script>
export default {
    props: ['msg', 'variant'],
    computed: {
        variantType(){
            return this.variant
        }
    },
}
</script>

<style scoped>
span{
    font-family: system-ui;
    font-size: 16px;
}
</style>
