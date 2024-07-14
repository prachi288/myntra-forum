import PropTypes from 'prop-types';
import { useState } from 'react';

const Comment = ({ comment, replies }) => {
  const [showReplies, setShowReplies] = useState(false);
  const toggleReplies = () => setShowReplies(!showReplies);

  return (
    <div className="ml-4 mt-2">
      <p className="text-gray-800">{comment}</p>
      <button onClick={toggleReplies} className="text-blue-500 text-sm mt-1">
        {showReplies ? 'Hide Replies' : 'View Replies'}
      </button>
      {showReplies && replies && (
        <div className="ml-4 mt-2">
          {replies.map((reply, index) => (
            <Comment key={index} comment={reply.comment} replies={reply.replies} />
          ))}
        </div>
      )}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  replies: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      replies: PropTypes.array,
    })
  ),
};

const Post = ({ username, category, content }) => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const toggleLike = () => setLiked(!liked);
  const toggleComments = () => setShowComments(!showComments);

  const handleAddComment = (e) => {
    e.preventDefault();
    const newComment = e.target.comment.value;
    setComments([...comments, { comment: newComment, replies: [] }]);
    e.target.comment.value = '';
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl">{category}</h2>
        <span className="text-gray-600 text-2xl">@{username}</span>
      </div>
      <p className="mb-4 text-3xl">{content}</p>
      <div className="flex justify-end space-x-4">
        <button onClick={toggleComments} className="px-4 py-2 rounded-lg">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 6.5a2.5 2.5 0 00-2.5-2.5H5.5A2.5 2.5 0 003 6.5V13a2.5 2.5 0 002.5 2.5H17l4 4v-13zm-7 6H8v-2h6v2zm4-4H8v-2h10v2z" />
          </svg>
        </button>
        <button onClick={toggleLike} className="px-4 py-2 rounded-lg">
          <svg
            className={`w-6 h-6 ${liked ? 'text-red-500' : 'text-gray-500'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
      {showComments && (
        <div className="mt-4">
          <form onSubmit={handleAddComment} className="mb-4">
            <input
              type="text"
              name="comment"
              placeholder="Add a comment..."
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button type="submit" className="px-4 py-2 bg-pink-500 text-white rounded-lg mt-2 hover:bg-pink-200">
              Submit
            </button>
          </form>
          <div>
            {comments.map((comment, index) => (
              <Comment key={index} comment={comment.comment} replies={comment.replies} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Post.propTypes = {
  username: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
