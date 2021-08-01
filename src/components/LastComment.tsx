import React, {useState, useEffect} from 'react';
import profile from '../img/profile4.jpg';
import { useRecoilState } from 'recoil';
import { CommentsState } from '../state';


export const LastComment = ({lastCommentId, nestedCommentId, commentId}:any) => {
    const [comments, setComments] = useRecoilState(CommentsState);
    const [lastComment, setLastComment] = useState({id: null, content: "", created_at: "",})

    useEffect(() => {
        const comment = comments.filter((comment) => (comment["id"] === commentId))[0];
        const nestedComments:any[] = comment["nestedComments"]
        const nestedComment = nestedComments.filter((nestedComment:any) => (nestedComment["id"] === nestedCommentId))[0]
        const lastComments:any[] = nestedComment["lastComments"]
        const lastComment = lastComments.filter((lastComment:any) => (lastComment["id"] === lastCommentId))[0]
        setLastComment(lastComment);
    }, [])


    return (
        <div className="border-b mb-8 px-16">
            <div className="mb-3 flex">
                <div className="mr-3">
                    <img src={profile} width={48} alt="proile"/>
                </div>
                <div>
                    <h1>익명</h1>
                    <h1>{lastComment["created_at"]}</h1>
                </div>
            </div>
            <div>
                <h1>{lastComment["content"]}</h1>
            </div>
            <div className="my-4"/>
        </div>
    )
}

