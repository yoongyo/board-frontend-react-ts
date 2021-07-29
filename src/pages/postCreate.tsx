import React from 'react';
import PostFrom from '../components/postForm';
import Header from '../components/header';


const PostCreate = () => {
    return (
        <>
            <Header/>
            <div className="text-center pb-20">
                <h1 className="text-4xl font-bold py-10 sm:py-20">Create Post</h1>
                <PostFrom/>    
            </div>         
        </>
    )
}


export default PostCreate;

