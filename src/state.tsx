import {atom} from 'recoil';

// 전역으로 상태를 관리하는 방법이 몇가지 있지만

// react 자체적으로 제공하고 react hooks 느낌 그대로 살리는 recoil로 전역 상태를 관리한다. 

export const PostState = atom({
    key: "PostState",
    default: []
})

export const CommentsState = atom({
    key: "CommentsState",
    default: []
})

export const CommentFormIndex = atom( {
    key: "CommentFormIndex",
    default: 0
})

export const NestedCommentFormIndex = atom({
    key: "NestedCommentForm",
    default: 0
})