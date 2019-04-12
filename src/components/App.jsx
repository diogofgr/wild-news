import React from 'react';
import Form from './Form';
import PostsList from './PostsList';

const posts = [
    {
        title: 'React is Awesome',
        content: 'Students in Wild Code School say react is awesome so it must be true.'
    },
    {
        title: 'I\'m allowed to!',
        content: 'Wild Student claims to be allowed to do anything.'
    },
];

const App = () => {
    return (
        <div>
            <h1>Wild News</h1>
            <PostsList posts={posts} />
            <Form />
        </div>
    );
};

export default App;
