import React, {useState, useEffect} from 'react';
import { BACKEND_URL } from '../api/backendURL';
import profile from '../img/profile4.jpg';
import { LastComment } from './LastComment';
import { NestedCommentForm } from './nestedCommentForm';
import { TinyCommentForm } from './tinyCommentForm';
import { useRecoilState } from 'recoil';
import { CommentsState, NestedCommentFormIndex } from '../state';


export const NestedComment = ({nestedCommentId, commentId}:any) => {
    const [comments, setComments] = useRecoilState(CommentsState);
    const [foldIndex, setFoldIndex] = useRecoilState(NestedCommentFormIndex);
    const [nestedComment, setNestedComment] = useState({id: null, content: "", created_at: "", lastComments: []})

    useEffect(() => {
        const comment = comments.filter((comment) => (comment["id"] === commentId))[0];
        const fuck:any[] = comment["nestedComments"]
        const nestedComment = fuck.filter((nestedComment:any) => (nestedComment["id"] === nestedCommentId))[0]
        setNestedComment(nestedComment);
    }, [])

    const onClick = () => {
        if (!foldIndex || foldIndex !== nestedComment["id"]) {
            setFoldIndex(nestedComment["id"]);
        } else {
            setFoldIndex(null);
        }
    }

    return (
        <>
            <div className="border-b mb-8 px-8">
                <div className="mb-3 flex">
                    <div className="mr-3">
                        <img src={profile} width={48} alt="proile"/>
                    </div>
                    <div>
                        <h1>익명</h1>
                        <h1>{nestedComment["created_at"]}</h1>
                    </div>
                </div>
                <div>
                    <h1>{nestedComment["content"]}</h1>
                    <button className="my-4" onClick={onClick}>답글 작성</button>
                    {nestedComment["id"] === foldIndex && <TinyCommentForm id={nestedComment["id"]} type={"lastComment"}/>}
                </div>
            </div>
            {nestedComment["lastComments"].map((lastComments) => (
                <LastComment lastCommentId={lastComments["id"]} nestedCommentId={nestedComment["id"]} commentId={commentId}/>
            ))}
        </>
    )
}


