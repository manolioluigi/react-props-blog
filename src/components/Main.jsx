import React from 'react';
import Post from './Post';
import posts from '../data/posts.json';

const Main = () => {

    const tagColors = {
        html: 'green',
        css: 'blue',
        js: 'red',
        php: 'purple',
    };

    const uniqueTags = [...new Set(posts.flatMap(post => post.tags))];

    return (
        <main className="blog-main pb-5">

            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center text-center mb-3">
                        <div className="distinct-tags">
                            <h3>Tag disponibili:</h3>
                            <ul className='padding-0 d-flex justify-content-center'>
                                {uniqueTags.map((tag, index) => (
                                    <span key={index} className={`badge bg-${tagColors[tag]}`}>
                                        {tag}
                                    </span>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row d-flex justify-content-center gap-5">
                    {posts.map((post) => (
                        <Post key={post.id} {...post} />
                    ))}
                </div>
            </div>

        </main>
    );
};

export default Main;