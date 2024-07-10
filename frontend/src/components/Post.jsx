import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ username, title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-gray-600">@{username}</span>
      </div>
      <p className="mb-4">{content}</p>
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Comment</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Like</button>
      </div>
    </div>
  );
};

Post.propTypes = {
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
