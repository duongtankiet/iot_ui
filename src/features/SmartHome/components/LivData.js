import React from 'react';
import PropTypes from 'prop-types';

LivData.propTypes = {
    posts: PropTypes.array,
};

LivData.defaultProps = {
    posts: [],
};

function LivData(props) {
    const {posts} = props;
    return (
        <div>
            {posts.map( post =>(
                <div key={post.id}>{` ${post.title}, state: ${post.state},  ${post.date} `}</div>
            ))}
        </div>
    );
}

export default LivData;