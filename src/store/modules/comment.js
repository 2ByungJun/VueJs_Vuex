export default {
    namespaced: true,
    state: {
        comments: [],
    },
    mutations: {
        CHANGE_LOAD_STATUS(state, status = true){
            state.isLoading = status;
        },
        SET_COMMENT_DATA(state){
            console.log("--SET_COMMENT_DATA--")
            state.comments = [
                {
                    id: 1,
                    name: "comment 1",
                    content: "comment content 1"
                }
            ]
        },
    },
    actions: {
        setCommentData({commit}){
            console.log("--setCommentData 실행--")
            commit('SET_COMMENT_DATA');
        }
    },
    getters: {
        commentCount(state){
            return state.comments.length
        }
    }
}