import React from 'react'

function EventCard ({event}) {
    return (
    <div className="event-card">
        <h1>{event.name}</h1>
        <img src={event.image} alt="Loading.." id="event-image"/>
        <a id="event-link"href={event.link} target="_blank"><h2>📍 {event.location}</h2></a>
    </div>
    )}
export default EventCard;