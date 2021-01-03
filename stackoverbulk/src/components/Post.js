import React from 'react';

const Post = ({id, title, description, tag}) => {
    return(
        <div>
            <h2>{id} {title} this query belongs to: {tag}</h2>
            <p>preview: {description}</p>
        </div>
    )
}

export default Post;