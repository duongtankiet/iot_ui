import React from 'react';
import PropTypes from 'prop-types';

Bed1Data.propTypes = {
    posts: PropTypes.array,
};

Bed1Data.defaultProps = {
    posts: [],
};

function Bed1Data(props) {
    const {posts} = props;
    return (
        <div>
            {posts.map( post =>(
                <div key={post.id}>{` ${post.title}, state: ${post.state},  ${post.date} `}</div>
            ))}
        </div>
    );
}

export default Bed1Data;