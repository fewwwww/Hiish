import React from 'react';
import Post from './Post';
import {posts} from './posts';

const PostList = ({posts}) => {
    const postComponent = posts.map((post,i) => {
        return <Post
                userid = {posts[i].userid}
                id = {posts[i].id}
                title = {posts[i].title}
                body = {posts[i].body}
                /> })
    return (
        <div>
            {postComponent}
        </div>
    )
}

export default PostList;