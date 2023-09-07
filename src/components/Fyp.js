
import PostCard from './PostCard';


function Fyp ({posts, handleLikes, sortFyp}) {
    return (
        <>
            <select className="sort-button" onChange={sortFyp}>
                <option>Latest Posts</option>
                <option >Earliest Post</option>
            </select>
        <div className="flow-container">
            
        {posts.map(post => { return <PostCard key={post.id} post={post} handleLikes={handleLikes} />})}
        </div>
        </>
        
    )

}

export default Fyp;
