import {Switch, Route} from 'react-router-dom';
import NavBar from './NavBar';
import {useEffect, useState} from 'react';
import Header from "./Header";
import Fyp from './Fyp';
import AddNewForm from './AddNewPost'
import Events from "./Events";
import TrendingHashtags from "./TrendingHashtags"
import '../App.css';



function App () {
const [posts, setPosts] = useState([])
const [liked, setLiked] = useState(false)


    useEffect(() => {
        fetch('http://localhost:8698/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts.sort().reverse()))
    }, [])
    
    const addNewPost = (newPost) => {
        fetch('http://localhost:8698/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        .then(response => response.json())
        .then(newData => setPosts([newData, ...posts]))
    }
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:8698/events')
        .then(response => response.json())
        .then(events => setEvents(events))
    }, [])

    function handleLikes (post) {
        setLiked(liked === !liked)
        fetch(`http://localhost:8698/posts/${post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({likes: post.likes + 1})
        })
        .then(response => response.json())
        .then(updateLikes => setPosts(posts => posts.map(like => like.id === updateLikes.id ? updateLikes : like)))
        
    }

    function sortFyp () {
        const sortedPosts = posts.sort().reverse()
        console.log(sortedPosts)
    }

    return (
        <div className='App'>
            <Header />
            <NavBar />
                <Switch>
                    <Route path="/events">
                        <Events events={events}/>
                    </Route>
                    <Route path='/hashtags'>
                        <TrendingHashtags />
                    </Route>
                    <Route path="/">
                        <AddNewForm addNewPost={addNewPost}/>
                        <Fyp posts={posts} handleLikes={handleLikes} liked={liked} sortFyp={sortFyp}/>
                    </Route>
                </Switch>
            
            
        </div>
        
    )
}

export default App;
