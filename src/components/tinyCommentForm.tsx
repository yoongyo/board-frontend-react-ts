import React, {useState} from 'react';
import { BACKEND_URL } from '../api/backendURL';
import { useRecoilState } from 'recoil';
import { CommentsState, CommentFormIndex, NestedCommentFormIndex } from '../state';


interface IProps {
    id: number,
    type: string
}

export const TinyCommentForm = ({ id, type }:IProps) => {
    const [content, setContent] = useState("");
    const [comments, setComments] = useRecoilState(CommentsState);
    const [foldComment, setFoldComment] = useRecoilState(CommentFormIndex);
    const [foldNested, setFoldNested] = useRecoilState(NestedCommentFormIndex);

    const onClick = () => {
        fetch(BACKEND_URL+'/'+type+'/create/'+id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({content:content})
        })
        .then(res => res.json())
        .then(json => {
            setComments(json)
            setContent("");
            if (type === "nestedComment"){
                setFoldComment(0);
            } else {
                setFoldNested(0)
            }
        })
    } 

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }

    return (
        <div className="bg-third px-6 py-6">
            <div className="border border-b p-3 rounded-tl-md rounded-tr-md">
                <h1 className="mb-3">익명</h1>
                <textarea className="w-full h-10" onChange={onChange} value={content}/>
            </div>
            <div className="flex border border-t-0 rounded-bl-md rounded-br-md p-3">
                <div className="flex-grow"></div>
                <div className="">
                    <button className="rounded-md bg-secondary p-2 border-secondary text-white" onClick={onClick}>등록</button>
                </div>
            </div>
        </div>
    )
}