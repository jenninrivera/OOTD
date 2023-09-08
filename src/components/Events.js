import React from 'react';
import EventCard from "./EventCard"

function Events ({events, setSearchPost}) {
    
    return (
        <>
            <form action="" className="search-bar">
                <input id="search-input"type="search" name="search" placeholder="Search Events.." onChange={(e) => setSearchPost(e.target.value)} pattern=".*\S.*" required/>
                    <button className="search-btn" type="submit">
                        <span>Search</span>
                    </button>
            </form>
        <div className="event-page">
            {events.map(event => {return <EventCard key={event.id} event={event}/>})}
        </div>
        
        </>
    )
}

export default Events;