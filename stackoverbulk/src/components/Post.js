import React from 'react';

const Post = ({userid, id, title, body}) => {
    return(
        <div>
        <img src={`https://picsum.photos/100/100?random=${userid}`} />
        <div>
        <h2>{id} {title} this query belongs to: {userid}</h2>
        <p>preview: {body}</p>
        </div>
        </div>
    )
}

export default Post;