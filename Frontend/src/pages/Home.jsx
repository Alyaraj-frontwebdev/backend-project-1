import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <div>
                <h1>Home</h1>
            </div>
            <div>
                <Link to="/createpost">Create Post</Link>
                <Link to="/posts">View Posts</Link>
            </div>
        </div>
    )
}

