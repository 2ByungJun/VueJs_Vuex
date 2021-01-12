// 딜레이
const delay = (duration = 500) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve()
        }, duration)
    })
}

// 포스트 데이터
// id : userId
const reqPostData = async (id = 0) => {
    await delay(1500)

    return [
        {
            id: id,
            title: "post title 1",
            content: "post content 1",
        },
    ]
}

// 유저 데이터
const reqUserData = async () => {
    await delay(1500)

    return {
        id: 1317,
        name: "이병준",
        age:  26,
        url: "https://velog.io/@ieed0205"
    }
}

export default{
    namespace: true,
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
        }
    },
    actions:{
        async getUserPostData({commit}){
            try {
                commit("CHANGE_LOAD_STATUS") // 로딩처리 true
                const { id } = await reqUserData() // 유저 데이터
                console.log(id)
                const posts = await reqPostData(id) // 유저데이터의 id값으로 포스트 목록 가져오기
                console.log(posts)
                commit("SET_POST_DATA", posts) // 포스트 데이터 변이(payload 전달)
            } catch(err){
                console.error(err)
            } finally{
                commit("CHANGE_LOAD_STATUS", false) // 로딩대기 false
            }
        }
    },
    getters:{

    }
}