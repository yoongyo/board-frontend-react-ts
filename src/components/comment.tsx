import React, {useState, useEffect} from 'react';
import { BACKEND_URL } from '../api/backendURL';
import profile from '../img/profile4.jpg';
import { TinyCommentForm } from './tinyCommentForm';
import { useRecoilState } from 'recoil';
import { CommentsState, CommentFormIndex } from '../state';
import { NestedComment } from './nestedComment';


export const Comment = ({commentId}:any) => {
    const [comments, setComments] = useRecoilState(CommentsState);
    const [foldIndex, setFoldIndex] = useRecoilState(CommentFormIndex);
    const [comment, setComment] = useState({content: "", created_at: "", nestedComments: []})
   
    useEffect(() => {
        const comment = comments.filter((comment) => (comment["id"] === commentId))[0];
        setComment(comment);
    })


    const onClick = () => {
        if (!foldIndex || foldIndex !== commentId) {
            setFoldIndex(commentId);
        } else {
            setFoldIndex(null)
        }
    }

    return (
        <>
            <div className="border-b mb-8">
                <div className="mb-3 flex">
                    <div className="mr-3">
                        <img src={profile} width={48} alt="proile"/>
                    </div>
                    <div>
                        <h1>익명</h1>
                        <h1>{comment["created_at"]}</h1>
                    </div>
                </div>
                <div>
                    <h1>{comment["content"]}</h1>
                    <button className="my-4" onClick={onClick}>답글 작성</button>
                    {commentId === foldIndex && <TinyCommentForm id={commentId} type={"nestedComment"}/>}
                </div>
            </div>
            {comment["nestedComments"].map((nestedComment) => (
                <NestedComment nestedCommentId={nestedComment["id"]} commentId={commentId}/>
            ))}
        </>
    )
}