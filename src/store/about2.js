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
        {
            id: id,
            title: "post title 2",
            content: "post content 2",
        },
        {
            id: id,
            title: "post title 3",
            content: "post content 3",
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
    namespace: true, // 모듈이 독립적으로 선언되기를 원하는 경우
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
        postCount(state){
            return state.posts.length
        },
    }
}