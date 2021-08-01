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
import { OpenGraph } from '../components/openGraph';
import { useHistory } from 'react-router-dom';


interface IPost {
    id: number,
    title: string,
    created_at: string,
    content: string, 
    views: number, 
    comments: []
}

interface ILocation {
}

interface IOpenGraph {
    title: string,
    url: string,
    href: string,
    description: string,
    img: string
}

const PostDetail : React.FunctionComponent<RouteComponentProps<ILocation>> = ({location}) => {
    const [post, setPost] = useState<IPost>({id: 0, title: "", created_at: "", content: "", views: 0, comments: []});
    const [comments, setComments] = useRecoilState(CommentsState);
    const [openGraphs, setOpenGraphs] = useState([]);
    const pathName = location.pathname;
    let history = useHistory();

    useEffect(() => {
        fetch(BACKEND_URL+'/post'+pathName, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(json => {
            setPost(json);
            setComments(json.comments);
            setOpenGraphs(json.open_graphs);
        })
    }, [])

    const detelePost = () => {
        fetch(BACKEND_URL+'/post/delete'+pathName, {
            method: 'DELETE'
        })
        .then(res => {
            history.push('/');
        })
    }

    return (
        <>
            <Header/>
            <div className="max-w-3xl mx-auto py-14 px-4 sm:px-0">
                <div>
                    <h1 className="text-4xl font-semibold pb-10">{post.title}</h1>
                    <h1 className="mb-4"><FontAwesomeIcon className="my-auto mr-2" icon={faClock}/>{post.created_at} &nbsp;&nbsp;조회수 {post.views}</h1>
                    <div className="w-full" dangerouslySetInnerHTML={{ __html: post.content }} style={{wordBreak: 'break-word'}}/>
                    {openGraphs.map((og: IOpenGraph) => (
                        <OpenGraph title={og.title} description={og.description} url={og.url} href={og.href} img={og.img}/>
                    ))}
                </div>
                <div className="my-8 flex flex-row-reverse">
                    <button className="bg-secondary text-white py-2 px-4 rounded-md shadow-lg hover:opacity-80" onClick={detelePost}>삭제</button>
                </div>
                <div className="border px-4 pt-8">
                    {comments.map((comment) => (
                        <Comment commentId={comment["id"]} key={comment["id"]}/>
                    ))}
                    <CommentForm postId={post.id}/>
                </div>
            </div>
        </>
    )
}


export default PostDetail;


