import React, {useState} from 'react';
import { BACKEND_URL } from '../api/backendURL';
import { useRecoilState } from 'recoil';
import { CommentsState } from '../state';

interface IProps {
    postId: number
}

export const CommentForm = ({ postId }:IProps) => {
    const [content, setContent] = useState("");
    const [comments, setComments] = useRecoilState(CommentsState);

    const onClick = () => {
        fetch(BACKEND_URL+'/comment/'+postId+'/comment-create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({content:content})
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setComments(json);
            setContent("");
        })
    } 

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }

    return (
        <div className="my-10">
            <div className="border border-b p-3 rounded-tl-md rounded-tr-md">
                <h1 className="mb-3">익명</h1>
                <textarea className="w-full h-20" onChange={onChange} value={content}/>
            </div>
            <div className="flex border border-t-0 rounded-bl-md rounded-br-md p-3">
                <div className="my-auto">
                    <h1>0/300</h1>
                </div>
                <div className="flex-grow"></div>
                <div className="">
                    <button className="rounded-md bg-secondary p-2 border-secondary text-white" onClick={onClick}>등록</button>
                </div>
            </div>
        </div>
    )
}