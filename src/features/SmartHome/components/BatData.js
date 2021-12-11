import React from 'react';
import PropTypes from 'prop-types';

BatData.propTypes = {
    posts: PropTypes.array,
};

BatData.defaultProps = {
    posts: [],
};

function BatData(props) {
    const {posts} = props;
    return (
        <div>
            {posts.map( post =>(
                <div key={post.id}>{` ${post.title}, state: ${post.state},  ${post.date} `}</div>
            ))}
        </div>
    );
}

export default BatData;