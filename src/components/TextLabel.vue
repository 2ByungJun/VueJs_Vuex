<template>
    <span class="badge badge-secondary">{{msg}}</span>
</template>

<script>
export default {
    props: ['msg']
}
</script>

<style scoped>
span{
    font-family: system-ui;
    font-size: 16px;
}
</style>
