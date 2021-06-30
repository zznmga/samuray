import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
  setProfile,
  getProfileThunk,
  getProfileStatusThunk,
  updateStatusThunk,
} from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUsedId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getProfileThunk(userId);
    this.props.getProfileStatusThunk(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUsedId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  // withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    setProfile,
    getProfileThunk,
    getProfileStatusThunk,
    updateStatusThunk,
  })
)(ProfileContainer);
