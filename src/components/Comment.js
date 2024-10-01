import React, { useState } from 'react';
import './Comment.css';

const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="اكتب تعليقك"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">إضافة تعليق</button>
      </form>
      <div>
        {comments.map((c, index) => (
          <p key={index}>{c}</p>
        ))}
      </div>
    </div>
  );
};

export default Comment;
