import { useState } from 'react';
import { connect } from 'react-redux';
import { saveComment } from 'actions';

const CommentBox = ({ saveComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    saveComment(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      ></textarea>
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

export default connect(null, { saveComment })(CommentBox);
