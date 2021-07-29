import {atom} from 'recoil';

export const CommentsState = atom({
    key: "CommentsState",
    default: []
})

export const CommentFormIndex = atom( {
    key: "CommentFormIndex",
    default: null
})

export const NestedCommentFormIndex = atom({
    key: "NestedCommentForm",
    default: null
})