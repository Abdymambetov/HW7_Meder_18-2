import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {oneUser} from "../../store/postSlice";

function Post({postInfo}) {
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{postInfo.title}</h1>
            <button onClick={() =>{
                dispatch(oneUser(postInfo.id))
            }}
            >more info</button>
            <p>----------------------</p>
        </div>
    );
}

export default Post;