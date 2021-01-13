import { reqUserData, reqPostData } from '../../api/postUser.js'

export default{
    namespaced: true, // 모듈이 독립적으로 선언되기를 원하는 경우
    state:{
        isLoading: false,
        posts: [],
    },
    mutations:{
        CHANGE_LOAD_STATUS(state, status = true){
            state.isLoading = status;
        },
        SET_POST_DATA(state, posts){
            state.posts = posts
        },
    },
    actions:{
        async getUserPostData({commit, dispatch}){
            // rootState, rootGetters
            dispatch("comment/setCommentData", null, { root: true })
            commit("comment/SET_COMMENT_DATA", null, { root: true})

            try {
                commit("CHANGE_LOAD_STATUS") // 로딩처리 true
                const { id } = await reqUserData() // 유저 데이터
                var posts = await reqPostData(id) // 유저데이터의 id값으로 포스트 목록 가져오기
                
                commit("SET_POST_DATA", posts) // 포스트 데이터 변이(payload 전달)
            } catch(err){
                console.error(err)
            } finally{
                commit("CHANGE_LOAD_STATUS", false) // 로딩대기 false
            }
        },
        async getPostData({commit}){
            try {
                commit("CHANGE_LOAD_STATUS") // 로딩처리 true
                var posts = await reqPostData() // 유저데이터의 id값으로 포스트 목록 가져오기
                
                commit("SET_POST_DATA", posts) // 포스트 데이터 변이(payload 전달)
            } catch(err){
                console.error(err)
            } finally{
                commit("CHANGE_LOAD_STATUS", false) // 로딩대기 false
            }
        }
    },
    getters:{
        postCount(state){
            return state.posts.length
        },
    }
}
