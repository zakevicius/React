import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { toggleAuth } from 'actions';

const App = ({ isLoggedIn, toggleAuth }) => {
  const renderButton = () => (
    <button onClick={() => toggleAuth(!isLoggedIn)}>
      {isLoggedIn ? 'Sign Out' : 'Sign In'}
    </button>
  );

  const renderHeader = () => (
    <ul type='none'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/post'>Post a Comment</Link>
      </li>
      <li>{renderButton()}</li>
    </ul>
  );

  return (
    <div>
      {renderHeader()}
      <Route path='/post' component={CommentBox} />
      <Route exact path='/' component={CommentList} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, { toggleAuth })(App);
