import {Switch, Route} from 'react-router-dom';
import NavBar from './NavBar';
import {useEffect, useState} from 'react';
import Header from "./Header";
import Fyp from './Fyp';
import AddNewForm from './AddNewPost'
import Events from "./Events";
import TrendingHashtags from "./TrendingHashtags"
import LikedPage from './LikedPage';
import '../App.css';



function App () {
const [posts, setPosts] = useState([])
const [searchPost, setSearchPost] = useState('')
const [myLikes, setMyLikes] = useState([])


    useEffect(() => {
        fetch('http://localhost:8698/posts')
        .then(response => response.json())
        .then(posts => setPosts([...posts].sort().reverse()))
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
        setPosts([...posts].sort().reverse())
    }
// search bar code
    const filteredEvents = events.filter(event=> {
        return event.name.toLowerCase().includes(searchPost.toLowerCase())
    })
//liked page code
    useEffect(() => {
        fetch('http://localhost:8698/my_likes')
        .then(response => response.json())
        .then(data => setMyLikes(data))
    }, [])

    const addLikedPost = (likedPost) => {
        fetch('http://localhost:8698/my_likes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(likedPost)
        })
        .then(response => response.json())
        .then(likedPost => setMyLikes([likedPost, ...myLikes]))
    }

    const handleRemove = (id) => {
        fetch('http://localhost:8698/my_likes/' + id, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok) {
                setMyLikes(myLikes.filter(post => {return post.id !== id}))
            }
        })
    } 

    return (
        <div className='App'>
            <Header />
            <NavBar />
                <Switch>
                    <Route path="/events">
                        <Events events={filteredEvents} setSearchPost={setSearchPost}/>
                    </Route>
                    <Route path='/hashtags'>
                        <TrendingHashtags />
                    </Route>
                    <Route path='/liked-posts'>
                        <LikedPage myLikes={myLikes} handleRemove={handleRemove}/>
                    </Route>
                    <Route path="/posts">
                        <AddNewForm addNewPost={addNewPost}/>
                        <Fyp posts={posts} handleLikes={handleLikes} sortFyp={sortFyp} addLikedPost={addLikedPost}/>
                    </Route>
                    <Route exact path="/">
                        <AddNewForm addNewPost={addNewPost}/>
                        <Fyp posts={posts} handleLikes={handleLikes} sortFyp={sortFyp}/>
                    </Route>
                </Switch>
            
            
        </div>
        
    )
}

export default App;
