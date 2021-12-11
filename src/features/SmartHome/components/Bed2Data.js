import React from 'react';
import PropTypes from 'prop-types';

Bed2Data.propTypes = {
    posts: PropTypes.array,
};

Bed2Data.defaultProps = {
    posts: [],
};

function Bed2Data(props) {
    const {posts} = props;
    return (
        <div>
            {posts.map( post =>(
                <div key={post.id}>{` ${post.title}, state: ${post.state},  ${post.date} `}</div>
            ))}
        </div>
    );
}

export default Bed2Data;