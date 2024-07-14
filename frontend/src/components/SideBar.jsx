const Sidebar = () => {
  const popularTopics = [
    { topic: '#Perfumes', posts: '100K' },
    { topic: '#Parachute-Pants', posts: '80K' },
    { topic: '#Oversized', posts: '50K' },
    { topic: '#Summer-faves', posts: '30K' },
    { topic: '#Celebrity-styles', posts: '20K' }
  ];

  return (
    <div className="bg-pink-500 w-64 h-auto min-h-screen p-6 shadow-lg overflow-y-auto">
      <h2 className="text-4xl font-bold mb-4 text-white">TRENDING</h2>
      <ul>
        {popularTopics.map((topic, index) => (
          <li key={index} className="mb-6">
            <a href="#" className="block text-white text-2xl hover:text-gray-200">
              <span className="font-semibold">{topic.topic}</span>
              <span className="block text-sm">{topic.posts} posts</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
