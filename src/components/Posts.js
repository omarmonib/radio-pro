import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; 
import '../styles/Posts.css';

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

  // دالة لتحديث محتوى المنشور الجديد
  const handleChange = ({ target: { value } }) => 
    setNewPost({ ...newPost, content: value });

  // دالة لإضافة منشور جديد
  const handlePostSubmit = (e, isButtonClick = false) => {
    if ((e.key === 'Enter' || isButtonClick) && newPost.content.trim()) {
      if (!isButtonClick) e.preventDefault(); // منع إعادة تحميل الصفحة عند الضغط على Enter
      setPosts([{ userName, content: newPost.content, comments: [], reactions: { like: 0, laugh: 0, sad: 0 } }, ...posts]);
      setNewPost({ content: '' });
      onPostAdded();
    }
  };

  // دالة لإضافة تعليق على منشور
  const handleAddComment = (index, e, isButtonClick = false) => {
    if ((e.key === 'Enter' || isButtonClick) && newComment.trim()) {
      if (!isButtonClick) e.preventDefault(); // منع إعادة تحميل الصفحة عند الضغط على Enter
      const updatedPosts = [...posts];
      updatedPosts[index].comments.push(newComment);
      setPosts(updatedPosts);
      setNewComment('');
    }
  };

  // دالة لإضافة تفاعل على منشور
  const handleReaction = (index, type) => {
    const updatedPosts = [...posts];
    updatedPosts[index].reactions[type]++;
    setPosts(updatedPosts);
  };

  return (
    <div className="posts-section">
      <form className="post-form">
        <textarea 
          name="content" 
          placeholder={`Write what benefits your colleague ENG ${userName}`} 
          value={newPost.content} 
          onChange={handleChange} 
          onKeyDown={(e) => handlePostSubmit(e)} 
          required 
        />
        <button 
          type="button" 
          onClick={(e) => handlePostSubmit(e, true)}> {/* تمرير true عند الضغط على الزر */}
          <FaPaperPlane />
        </button>
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

            <div className="comment-input-wrapper">
              <textarea 
                placeholder="اكتب تعليق..." 
                value={newComment} 
                onChange={(e) => setNewComment(e.target.value)} 
                onKeyDown={(e) => handleAddComment(index, e)} 
              />
              <button 
                type="button" 
                onClick={(e) => handleAddComment(index, e, true)} 
                disabled={!newComment.trim()}>
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
