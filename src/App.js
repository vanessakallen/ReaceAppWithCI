import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postNumber = posts.length + 1;
    setPosts([...posts, { title, content, postNumber }]);
    setTitle('');
    setContent('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blogging App</h1>
        <h2>Type something up, then make a post!</h2> 
        <form onSubmit={handleSubmit}>
          <input placeholder="Enter post title" value={title} onChange={e => setTitle(e.target.value)} />
          <textarea placeholder="Enter post content" value={content} onChange={e => setContent(e.target.value)} />
          <button type="submit">Post</button>
        </form>
      </header>
      <div className="Posts">
        {posts.map((post, index) => (
          <div key={index} className="Post">
            <h2>{`${post.postNumber}. ${post.title}`}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
