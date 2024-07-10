import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div className="container mx-auto mt-8 y-scroll h-96">
      {posts.map((post, index) => (
        <Post
          key={index}
          username={post.username}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostList;
