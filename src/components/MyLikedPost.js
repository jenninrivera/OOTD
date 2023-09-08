import React from 'react'

function MyLikedPost ({post, handleRemove}) {
    return (
        <div id='post-div'>
                <img id="post-image" src={post.image} alt="Loading..."/> < br/> <button onClick={() => handleRemove(post.id)} id="like-button">❤ {post.likes} likes</button>
                <h1 id="post-location">📍 {post.location}</h1>
                <h2 id="post-event">{post.event}</h2>
                <h3 id="post-caption">{post.caption}</h3>
            </div>
        
    )
}

export default MyLikedPost