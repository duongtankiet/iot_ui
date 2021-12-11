import React from 'react';
import PropTypes from 'prop-types';

HouseData.propTypes = {
    posts: PropTypes.array,
};

HouseData.defaultProps = {
    posts: [],
};

function HouseData(props) {
    const {posts} = props;
    return (
        <div>
            {posts.map( post =>(
                <div key={post.id}>{` ${post.title}, state: ${post.state},  ${post.date} `}</div>
            ))}
        </div>
    );
}

export default HouseData;