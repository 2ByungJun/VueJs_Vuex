// 딜레이
const delay = (duration = 500) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve()
        }, duration)
    })
}

// 포스트 데이터
const posts = [
    {
        id: 1,
        title: "post title 1",
        content: "post content 1",
    },
    {
        id: 2,
        title: "post title 2",
        content: "post content 2",
    },
    {
        id: 3,
        title: "post title 3",
        content: "post content 3",
    },
]

// id : userId
const reqPostData = async (i=0) => {
    await delay(1500)

    var post = posts.find(function(item){
        if(item.id === i){
            return item
        }
    })

    return i == 0 ? posts : post
}

// 유저 데이터
const reqUserData = async () => {
    await delay(1500)

    return {
        id: 2,
        name: "이병준",
        age:  26,
        url: "https://velog.io/@ieed0205"
    }
}

// default를 붙였더니 동작을 하지 않았다.
export {
    reqPostData,
    reqUserData
}