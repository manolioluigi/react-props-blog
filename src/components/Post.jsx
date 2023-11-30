import React from 'react';

const Post = () => {
    return (
        <div>
            <div className="post my-2">
                <div className='upper-card'>
                    <span className='sample-text'>600 x 400</span>
                </div>
                <div className='bottom-card'>
                    <h5>Titolo del Post</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quia blanditiis suscipit optio maxime quaerat quam nam impedit aspernatur quas voluptate distinctio repellat quis consequatur excepturi quasi repudiandae?</p>
                    <div className="button">LEGGI DI PIU'</div>
                </div>
            </div>
        </div>
    );
};

export default Post;
