import {atom} from 'recoil';

export const CommentsState = atom({
    key: "CommentsState",
    default: []
})

export const CommentFormIndex = atom( {
    key: "CommentFormIndex",
    default: -1
})

export const NestedCommentFormIndex = atom({
    key: "NestedCommentForm",
    default: -1
})