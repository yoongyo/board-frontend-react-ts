import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../api/backendURL';
import { useHistory } from 'react-router-dom';
import socketIOClient from "socket.io-client";


const PostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [contentLength, setContentLength] = useState(0);

    let history = useHistory();

    const onClick = () => {
        fetch(BACKEND_URL+'/post/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title:title, content:content})
        })
        .then(res => {
            console.log(res)
            history.push('/');
        })
        // const socket = socketIOClient('http://127.0.0.1:9000');
        // socket.emit('post-create', { title: title, content: content });
        // socket.on('my response', (msg) => {
        //     console.log(msg);
        // })
    }

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        if (text.length < 1201) {
            setContent(text);
            setContentLength(text.length);
        } else {
            alert("1200자 안에서 작성해주세요.");
        }
    }

    return (
        <form className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-3xl">
            <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"  placeholder="Title" type="text" onChange={onChangeTitle}/>
            <textarea className="description bg-gray-100 sec p-3 h-96 border border-gray-300 outline-none" placeholder="Describe everything about this post here" onChange={onChangeContent}></textarea>
            
            <div className="icons flex text-gray-500 mx-2 mt-4 mb-3">
                <div className="count ml-auto text-gray-400 text-xs font-semibold">{contentLength}/1200</div>
            </div>
            <div className="buttons flex my-1">
                <button className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"><Link to="/">Cancel</Link></button>
                <button className="btn border border-secondary p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-secondary" type="button" onClick={onClick}>Post</button>
            </div>
        </form>
    )
}


export default PostForm