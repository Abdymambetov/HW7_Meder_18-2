import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getPosts, deletePost, oneUser} from "../../store/postSlice";
import Post from "../../components/post/Post";

function PostPage(props) {
    const dispatch = useDispatch()
    const {posts, preloader, error, onePost} = useSelector(state => state.postsReducer)


    const getPostsFunc = () => {
        dispatch(getPosts())
    }
    useEffect(() => {
        getPostsFunc()
    }, [])

    return (
        <div>
            <h1>posts</h1>
            <hr/>
            <p>{onePost?.body ?
                onePost.body
                :
                `Body :`
            }</p>
            <hr/>
            <button onClick={getPostsFunc}>get posts</button>
            <button onClick={() => dispatch(deletePost())}>delete All</button>
            {
                preloader
                    ?
                    <h3>loading...</h3>
                    :
                    error
                    ?
                        <h3>{error}</h3>
                        :
                        posts.map(post => <Post key={post.id} postInfo={post}/>)
            }
        </div>
    );
}

export default PostPage;