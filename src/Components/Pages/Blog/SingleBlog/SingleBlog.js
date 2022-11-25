import React from 'react';

const SingleBlog = ({article, index}) => {
    const {title, articleHeading,articleBody} = article;
    const number = index + 1;
     return (
        <div className='w-full md:w-1/2 mx-auto text-center'>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-primary text-2xl font-medium">
                    <span>{number}. </span>
                    {title}
                </div>
                <div className="collapse-content text-secondary">
                    <h1 className='text-xl'>{articleHeading}</h1>
                    <p>{articleBody}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;