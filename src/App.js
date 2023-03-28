import React, { useState } from "react";
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePost = (event) => {
    event.preventDefault();
    const postNumber = posts.length + 1;
    setPosts([...posts, { title, content, postNumber }]);
    setTitle('');
    setContent('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Blogging App</h1>
        <h2 className="subtitle">Type something up, then make a post!</h2> 
        <form onSubmit={handlePost}>
          <input
            className="input-field"
            placeholder="Enter post title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          /><br />
          <textarea
            className="textarea-field"
            placeholder="Enter post content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          /><br />
          <button className="submit-button" type="submit">Post</button>
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
