<template>
    <div>
        <!-- Getters는 posts 상태가 변화됨을 감지하여 계산한 값을 리턴한다.(computed와 비슷) -->
        <p>
            postCount : {{ $store.getters.postCount }}
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
export default {

}
</script>

<style>

</style>