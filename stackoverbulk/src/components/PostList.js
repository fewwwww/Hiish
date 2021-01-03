import React from 'react';
import Post from './Post';
import {posts} from './posts';

const PostList = ({posts}) => {
    const postComponent = posts.map((post,i) => {
        return <Post
                id = {posts[i].id}
                title = {posts[i].title}
                description = {posts[i].description}
                tag = {posts[i].tag}
                /> })
    return (
        <div>
            {postComponent}
        </div>
    )
}

export default PostList;