import { useEffect } from 'react';
import { connect } from 'react-redux';

const requireAuth = (Child) => {
  const ComposedComponent = ({ isLoggedIn, history, ...props }) => {
    useEffect(() => {
      if (!isLoggedIn) {
        history.push('/');
      }
    });

    return <Child {...props} />;
  };

  const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.isLoggedIn,
    };
  };

  return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
