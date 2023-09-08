import React, {useState} from 'react';


function PostCard ({post, handleLikes, addLikedPost}) {
   const [postLiked, setPostLiked] = useState(false)
    return (
        // <div className="flow-child">
            <div id='post-div'>
                <img id="post-image" src={post.image} alt="Loading..."/> < br/> <button onClick={() => {
                    setPostLiked(!postLiked)
                    handleLikes(post)
                    addLikedPost(post) 
                }
                    
                } id="like-button">{postLiked ?  '❤' : '♡'} {post.likes} likes</button>
                <h1 id="post-location">📍 {post.location}</h1>
                <h2 id="post-event">{post.event}</h2>
                <h3 id="post-caption">{post.caption}</h3>

            </div>
        // </div>
    )
}

export default PostCard;