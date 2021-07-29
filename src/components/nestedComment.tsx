import React, {useState, useEffect} from 'react';
import { BACKEND_URL } from '../api/backendURL';
import profile from '../img/profile4.jpg';
import { LastComment } from './LastComment';
import { TinyCommentForm } from './tinyCommentForm';
import { useRecoilState } from 'recoil';
import { CommentsState, NestedCommentFormIndex } from '../state';


interface INestedComment {
    id: number,
    content: string,
    created_at: string,
    lastComments: []
}

interface INestedCommentProps {
    nestedCommentId: number,
    commentId: number
}



export const NestedComment = ({nestedCommentId, commentId}:INestedCommentProps) => {
    const [comments, setComments] = useRecoilState(CommentsState);
    const [foldIndex, setFoldIndex] = useRecoilState(NestedCommentFormIndex);
    const [nestedComment, setNestedComment] = useState<INestedComment>({id: -1, content: "", created_at: "", lastComments: []})

    useEffect(() => {
        const comment = comments.filter((comment) => (comment["id"] === commentId))[0];
        const nestedComments: [] = comment["nestedComments"]
        const nestedComment = nestedComments.filter((nestedComment:INestedComment) => (nestedComment.id === nestedCommentId))[0]
        setNestedComment(nestedComment);
    }, [])

    const onClick = () => {
        if (foldIndex === -1 || foldIndex !== nestedComment.id) {
            setFoldIndex(nestedComment.id);
        } else {
            setFoldIndex(-1);
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
                        <h1>{nestedComment.created_at}</h1>
                    </div>
                </div>
                <div>
                    <h1>{nestedComment.content}</h1>
                    <button className="my-4" onClick={onClick}>답글 작성</button>
                    {nestedComment.id === foldIndex && <TinyCommentForm id={nestedComment.id} type={"lastComment"}/>}
                </div>
            </div>
            {nestedComment.lastComments.map((lastComments) => (
                <LastComment lastCommentId={lastComments["id"]} nestedCommentId={nestedComment.id} commentId={commentId}/>
            ))}
        </>
    )
}


