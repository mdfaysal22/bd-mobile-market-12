import React from 'react';

const SingleBlog = ({article}) => {
    const {title, articleHeading,articleBody} = article;
     return (
        <div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    {title}
                </div>
                <div className="collapse-content">
                    <h1>{articleHeading}</h1>
                    <p>{articleBody}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;