import React from 'react';
import posts from './../data/posts';
import { NavLink } from 'react-router-dom';
const Blog = () => {
    return (
        <div>
            <h2>Blog </h2>
            <ul>
                {posts.map((posts) => {
                    return <li key={posts.id}>
                        <NavLink to={`/posts/${posts.id}`}>
                            {posts.titulo}
                        </NavLink>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Blog;