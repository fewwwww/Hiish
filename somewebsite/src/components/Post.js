import React from 'react';

const Post = ({userid, id, title, body}) => {
    return(
        <div style={{display:"flex", justifyContent:"flex-start",padding:"5px"}}>
        {/*need to change id to userid*/}
        {/*use id just for randomize the pic*/}
        <img src={`https://picsum.photos/100/100?random=${id}`} />
        <div style={{display:"flex", justifyContent:"flex-start"}}>
        <h2>{id} {title} this query belongs to: {userid}</h2>
        <p>preview: {body}</p>
        </div>
        </div>
    )
}

export default Post;