import React from 'react';

const Post = ({ title, image, content, tags, published }) => {

    if (!published) {
        return null;
    }

    const tagColors = {
        html: 'green',
        css: 'blue',
        js: 'red',
        php: 'purple',
    };

    const imageUrl = image === '...' || !image ? 'https://picsum.photos/500/300' : image;

    return (
        <div className={`post ${tags.map(tag => tagColors[tag]).join(' ')}`}>
            <div className="post my-2">
                <div className='upper-card'>
                    <img src={imageUrl} alt="Post" />
                </div>
                <div className='bottom-card'>
                    <h5>{title}</h5>
                    <p className='margin-0'>{content}</p>
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <span key={index} className={`badge bg-${tagColors[tag]}`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="button">LEGGI DI PIU'</div>
                </div>
            </div>
        </div>
    );
};

export default Post;
