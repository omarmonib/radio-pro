import React, { useState } from 'react';
import './Posts.css';

const Posts = ({ onPostAdded, userName }) => {
  const [posts, setPosts] = useState([
    { 
      userName: 'Omar Moneeb', 
      content: 'This is the first post description.', 
      comments: [], 
      reactions: { like: 0, laugh: 0, sad: 0 } 
    },
    { 
      userName: 'Ali Ahmed', 
      content: 'This is the second post description.', 
      comments: [], 
      reactions: { like: 0, laugh: 0, sad: 0 } 
    }
  ]);

  const [newPost, setNewPost] = useState({ content: '' });
  const [newComment, setNewComment] = useState('');

  const handleChange = ({ target: { value } }) => 
    setNewPost({ ...newPost, content: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.content) {
      setPosts([{ userName, content: newPost.content, comments: [], reactions: { like: 0, laugh: 0, sad: 0 } }, ...posts]);
      setNewPost({ content: '' });
      onPostAdded();
    }
  };

  const handleAddComment = (index) => {
    if (newComment.trim()) {
      const updatedPosts = [...posts];
      updatedPosts[index].comments.push(newComment);
      setPosts(updatedPosts);
      setNewComment('');
    }
  };

  const handleReaction = (index, type) => {
    const updatedPosts = [...posts];
    updatedPosts[index].reactions[type]++;
    setPosts(updatedPosts);
  };

  return (
    <div className="posts-section">
      <form onSubmit={handleSubmit} className="post-form">
        <textarea 
          name="content" 
          placeholder={`Write what benefits your colleague ENG ${userName}`} 
          value={newPost.content} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Add Post</button>
      </form>

      {posts.map((post, index) => (
        <div key={index} className="post">
          <h3>{post.userName}</h3>
          <p>{post.content}</p>
          <div className="post-actions">
            {['like', 'laugh', 'sad'].map((reactionType) => (
              <button key={reactionType} onClick={() => handleReaction(index, reactionType)}>
                {reactionType === 'like' ? '👍' : reactionType === 'laugh' ? '😂' : '😢'}
                {post.reactions[reactionType]}
              </button>
            ))}
          </div>

          <div className="comments-section">
            {post.comments.map((comment, idx) => (
              <p key={idx}>{comment}</p>
            ))}
            <textarea 
              placeholder="أكتب تعليق..." 
              value={newComment} 
              onChange={(e) => setNewComment(e.target.value)} 
            />
            <button onClick={() => handleAddComment(index)}>Add Comment</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
