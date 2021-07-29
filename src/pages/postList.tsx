import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../api/backendURL';
import Header from '../components/header';
import socketIOClient  from 'socket.io-client';


const PostList = ():React => {
    const [posts, setPosts] = useState([]);
    // const socket = socketIOClient ('http://localhost:5000');

    useEffect(() => {
        // socket.emit("hello", 'socket');

        fetch(BACKEND_URL + '/post-list', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(json => {
            setPosts(json);
            console.log(json)
        })
    }, [])
    return (
        <>
            <Header/>
            <div className="max-w-2xl mx-auto p-14 sm:px-0">
                <ul className="list-disc">
                    {posts.map((item:any, index:any) => (
                        <li className="pb-6" key={index}>
                            <Link to={{
                                pathname:`${item["id"]}`,
                            }}>
                                <h1 className="text-3xl hover:underline">{item["title"]}</h1>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}


export default PostList;

