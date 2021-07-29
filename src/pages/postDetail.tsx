import React, {useState, useEffect} from 'react';
import { BACKEND_URL } from '../api/backendURL';
import Header from '../components/header';
import { CommentForm } from '../components/commentForm';
import { Comment } from '../components/comment';
import { useRecoilState } from 'recoil';
import { CommentsState } from '../state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { RouteComponentProps } from "react-router-dom";

interface post {
    id: number,
    title: string,
    created_at: string,
    content: string, 
    views: number, 
    comments: []
}

interface ILocation {
}

const PostDetail : React.FunctionComponent<RouteComponentProps<ILocation>> = ({location}) => {
    const [post, setPost] = useState<post>({id: 0, title: "", created_at: "", content: "", views: 0, comments: []});
    const [comments, setComments] = useRecoilState(CommentsState);
    const pathName = location.pathname;

    useEffect(() => {
        fetch(BACKEND_URL + pathName, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(json => {
            setPost(json);
            setComments(json.comments);
        })
    }, [])

    return (
        <>
            <Header/>
            <div className="max-w-3xl mx-auto py-14 px-4 sm:px-0">
                <div className="mb-10">
                    <h1 className="text-4xl font-semibold pb-10">{post.title}</h1>
                    <h1 className="mb-4"><FontAwesomeIcon className="my-auto mr-2" icon={faClock}/>{post.created_at} &nbsp;&nbsp;조회수 {post.views}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.content }}/>
                </div>
                <div className="border px-4 pt-8">
                    {comments.map((comment) => (
                        <Comment commentId={comment["id"]}/>
                    ))}
                    <CommentForm postId={post.id}/>
                </div>
            </div>
        </>
    )
}


export default PostDetail;


