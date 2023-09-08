import React, {useState} from 'react';

function AddNewPost ({addNewPost}) {
 const defaultObj = {
        image: "",
        location: "",
        event: "",
        caption: ""
    }

    const [form, setForm] = useState(defaultObj)

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewPost(form)
        setForm(defaultObj)
    }
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={handleSubmit} className="post-form">
                <input onChange={handleChange} value={form.image} type="text" name="image" placeholder="Image URL"/>                 
                <input onChange={handleChange} value={form.location} type="text" name="location" placeholder="Location"/> 
                <input onChange={handleChange} value={form.event} type="text" name="event" placeholder="Event"/> 
                <textarea rows="5" col="20" wrap="hard" maxLength="250" id="caption-input" onChange={handleChange} value={form.caption} type="text" name="caption" placeholder="Caption"></textarea>
                <button className="add-post-button">Add Post</button>                 
        </form>
    )
}
export default AddNewPost;