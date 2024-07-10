import React, { useState } from 'react';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';
import Sidebar from './components/SideBar';
import './index.css';

const posts = [
  { username: 'user1', title: 'Post 1', content: 'This is the content of post 1.' },
  { username: 'user2', title: 'Post 2', content: 'This is the content of post 2.' },
  { username: 'user3', title: 'Post 3', content: 'This is the content of post 3.' },
  { username: 'user4', title: 'Post 3', content: 'This is the content of post 3.' },
  { username: 'user5', title: 'Post 3', content: 'This is the content of post 3.' },
  { username: 'user3', title: 'Post 3', content: 'This is the content of post 3.' },
  { username: 'user3', title: 'Post 3', content: 'This is the content of post 3.' },
  { username: 'user3', title: 'Post 3', content: 'This is the content of post 3.' },
  { username: 'user3', title: 'Post 3', content: 'This is the content of post 3.' },
  { username: 'user3', title: 'Post 3', content: 'This is the content of post 3.' },
  { username: 'user3', title: 'Post 3', content: 'This is the content of post 3.' },
  { username: 'user3', title: 'Post 3', content: 'This is the content of post 3.' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-1 p-4 ">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <PostList posts={filteredPosts} />
      </div>
    </div>
  );
}

export default App;
