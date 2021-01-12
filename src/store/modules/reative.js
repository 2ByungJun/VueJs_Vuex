export default {
    namespaced: true, // 모듈이 독립적으로 선언되기를 원하는 경우
    state: {
        count: 0
    },
    mutations: {
        // count 상태를 증가시키는 변이
        // ※ 매개변수를 default 시킬 수 있다.
        increment(state, n=1){
            state.count += n
        },
        // count 상태를 감소시키는 변이
        decrement(state, n=1){
            state.count -= n
        },
        // object
        objectIncrement(state, payload){
            state.count += payload.amount
        },
        // reset
        resetCount(state){
            state.count = 0
        }
    },
    actions: {
    },
    getters: {

    }
}