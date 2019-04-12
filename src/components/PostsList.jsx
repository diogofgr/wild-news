import React from 'react';
import Post from './Post';

const PostsList = ({ posts }) => {
    return (
        <div className="h-100">
            {
                posts.map(post => <Post post={post} />)
            }
        </div>
    );
};

export default PostsList;
