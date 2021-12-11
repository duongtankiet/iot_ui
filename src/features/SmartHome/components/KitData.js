import React from 'react';
import PropTypes from 'prop-types';

KitData.propTypes = {
    posts: PropTypes.array,
};

KitData.defaultProps = {
    posts: [],
};

function KitData(props) {
    const {posts} = props;
    return (
        <div>
            {posts.map( post =>(
                <div key={post.id}>{` ${post.title}, state: ${post.state},  ${post.date} `}</div>
            ))}
        </div>
    );
}

export default KitData;