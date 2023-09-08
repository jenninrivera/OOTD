import MyLikedPost from "./MyLikedPost"


function LikedPage ({myLikes, handleRemove}) {
    return (
        <div className="flow-container">
        {myLikes.map(post => { return <MyLikedPost key={post.id} post={post} handleRemove={handleRemove} />})}
        </div>
    )
}

export default LikedPage