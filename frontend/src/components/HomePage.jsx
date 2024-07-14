import { useState } from 'react';
import PostList from './PostList.jsx';
import SearchBar from './SearchBar.jsx';
import Sidebar from './SideBar.jsx';
import Modal from './Modal.jsx';

const initialPosts = [
  { username: 'user1', category: 'm/Perfumes', content: 'Recommend me some Summer Fragrances' },
  { username: 'user2', category: 'm/Oversized', content: 'What do you guys think about oversized clothing?' },
  { username: 'user3', category: 'm/Shoes', content: 'Bellies hurt my feet. Any alternative?' },
  { username: 'user4', category: 'm/Bags', content: 'What type of bag would suit this outfit?' },
  { username: 'user5', category: 'm/Clothing', content: 'I think skinny jeans might be a thing of the past now' },
  { username: 'user6', category: 'm/Jewellery', content: 'Suggest me some bridal earrings' },
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState(initialPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('');

  const filteredPosts = posts.filter(post =>
    post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handlePostSubmit = () => {
    const newPost = {
      username: 'newUser',
      category: `m/${newPostCategory}`,
      content: newPostContent,
    };
    setPosts([...posts, newPost]);
    setNewPostContent('');
    setNewPostCategory('');
    handleCloseModal();
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 p-4 bg-pink-50 min-h-screen">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <div className="mb-4">
          <button
            onClick={handleOpenModal}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
          >
            Create New Post
          </button>
        </div>
        <PostList posts={filteredPosts} />
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handlePostSubmit}
          content={newPostContent}
          setContent={setNewPostContent}
          category={newPostCategory}
          setCategory={setNewPostCategory}
        />
      </div>
    </div>
  );
};

export default HomePage;
