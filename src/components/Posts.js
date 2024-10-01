import React, { useState } from 'react';
import './Posts.css';
import likeIcon from '../assets/icons/like.png';
import commentIcon from '../assets/icons/comment.png';
import shareIcon from '../assets/icons/share.png';
import laughIcon from '../assets/icons/laugh.png';
import sadIcon from '../assets/icons/sad.png';

const Posts = ({ onPostAdded }) => {
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
  
  const [newPost, setNewPost] = useState({ userName: '', content: '' });
  const [newComment, setNewComment] = useState('');

  const handleChange = ({ target: { name, value } }) => 
    setNewPost({ ...newPost, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.userName && newPost.content) {
      setPosts([{ ...newPost, comments: [], reactions: { like: 0, laugh: 0, sad: 0 } }, ...posts]);
      setNewPost({ userName: '', content: '' });
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
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <input 
          type="text" 
          name="userName" 
          placeholder="Enter username" 
          value={newPost.userName} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="content" 
          placeholder="Enter post description" 
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
                <img 
                  src={{ like: likeIcon, laugh: laughIcon, sad: sadIcon }[reactionType]} 
                  alt={reactionType} 
                />
                {post.reactions[reactionType]} {reactionType === 'like' ? 'Like' : reactionType === 'laugh' ? 'Laugh' : 'Sad'}
              </button>
            ))}
            <button><img src={commentIcon} alt="Comment" /> Comment</button>
            <button><img src={shareIcon} alt="Share" /> Share</button>
          </div>
          <div className="comments-section">
            <h4>Comments</h4>
            {post.comments.length ? (
              post.comments.map((comment, commentIndex) => (
                <p key={commentIndex}>{comment}</p>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
            <textarea 
              placeholder="Add a comment" 
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
