import React from 'react';
import Post from './Post';

function Racket({ posts }) {
    return (
        <div className="grid grid-cols-3 gap-5">
            {posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
}

export default Racket;
