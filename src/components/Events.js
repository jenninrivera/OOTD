import React from 'react';
import EventCard from "./EventCard"

function Events ({events}) {
    
    return (
        <div>
            {events.map(event => {return <EventCard key={event.id} event={event}/>})}
        </div>
    )
}

export default Events;