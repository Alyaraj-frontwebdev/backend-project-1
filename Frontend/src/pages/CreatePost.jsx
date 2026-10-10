import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const CreatePost = () => {
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        axios.post('http://localhost:3000/create-post', formData).then((res) => {
            console.log(res)
            navigate('/posts')
        })
    }

    return (
        <section className='create-post-section'>
            <h1>Create Post</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="file" name="image" accept="image/*" />
                <input type='text' name='caption' placeholder='Write a caption' required />
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

