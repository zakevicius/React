import { connect } from 'react-redux';

const CommentList = ({ comments }) => {
  const renderComments = () => comments.map(c => (<li key={c}>{c}</li>))
  
  return (
    <div>
      <ul>
        {renderComments()}
      </ul>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps)(CommentList);
