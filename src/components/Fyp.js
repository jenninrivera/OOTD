
import PostCard from './PostCard';


function Fyp ({posts, handleLikes, sortFyp, addLikedPost}) {
    return (
        <>
            <select className="sort-button" onChange={sortFyp}>
                <option>Latest Posts</option>
                <option >Earliest Posts</option>
            </select>
        <div className="flow-container">
            
        {posts.map(post => { return <PostCard key={post.id} post={post} handleLikes={handleLikes} addLikedPost={addLikedPost}/>})}
        </div>
        </>
        
    )

}

export default Fyp;
