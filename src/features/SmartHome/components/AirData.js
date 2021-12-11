import React from 'react';
import PropTypes from 'prop-types';

AirData.propTypes = {
    posts: PropTypes.array,
};

AirData.defaultProps = {
    posts: [],
};

function AirData(props) {
    const {posts} = props;
    return (
        <div>
            {posts.map( post =>(
                <div key={post.id}>{` ${post.title}, state: ${post.state},  ${post.date} `}</div>
            ))}
        </div>
    );
}

export default AirData;