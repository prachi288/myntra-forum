import PropTypes from 'prop-types';
import Post from './Post.jsx';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post
          key={index}
          username={post.username}
          category={post.category}
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
      category: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostList;
