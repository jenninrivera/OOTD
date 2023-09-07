
import PostCard from './PostCard';


function Fyp ({posts, handleLikes, liked, sortFyp}) {
    return (
        <div className="flow-container">
            <select className="sort-button" onClick={sortFyp}>
                <option>Latest Posts</option>
                <option >Earliest Post</option>
            </select>
        {posts.map(post => { return <PostCard key={post.id} post={post} handleLikes={handleLikes} liked={liked}/>})}
        </div>
    )

}

export default Fyp;
