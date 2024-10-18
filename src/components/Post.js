import React, { useState } from 'react';

const Post = ({ post, postIndex, posts, setPosts }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const updatedPosts = [...posts];
      updatedPosts[postIndex].comments.push(newComment);
      setPosts(updatedPosts);
      setNewComment('');
    }
  };

  const handleReaction = (type) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].reactions[type]++;
    setPosts(updatedPosts);
  };

  return (
    <div className="post">
      <h3>{post.userName}</h3>
      <p>{post.content}</p>

      <div className="post-actions">
        {['like', 'laugh', 'sad'].map((reactionType) => (
          <button key={reactionType} onClick={() => handleReaction(reactionType)}>
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
          placeholder="اكتب تعليق..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment} disabled={!newComment.trim()}>
          إضافة تعليق
        </button>
      </div>
    </div>
  );
};

export default Post;
