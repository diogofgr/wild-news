import React from 'react';

const Form = () => {
    return (
        <form>
            <input type="text" name="title" placeholder="My Post Title" className="w-100" />
            <textarea name="content" placeholder="Post content here..." className="w-100" />
            <input type="submit" className="btn btn-primary" value="Publish" />
        </form>
    );
};

export default Form;
