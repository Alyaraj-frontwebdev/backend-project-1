import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const Posts = () => {
    const [posts, setPosts] = useState([
        {
            _id: '1',
            image: 'https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/ff6521b0-95d6-460e-ba57-59700435d24f/EE7A0433-2.jpg',
            caption: 'Somewhere between the storm and the stillness.'
        },
    ]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts').then((res) => {
            setPosts(res.data.posts);
        })
    }, [])

    return (
        <section className='feed-section'>
            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card'>
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts found</p>
                )
            }
        </section>
    )
}

