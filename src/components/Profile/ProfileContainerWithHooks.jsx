import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
  setProfile,
  getProfileThunk,
  getProfileStatusThunk,
  updateStatusThunk,
  uploadAvatarThunk,
} from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { profileAPI } from '../../api/api';

const ProfileContainerWithHooks = (props) => {
  const updateProfileInfo = () => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = props.authorizedUsedId;
      if (!userId) {
        props.history.push('/login');
      }
    }
    props.getProfileThunk(userId);
    props.getProfileStatusThunk(userId);
  };

  useEffect(() => {
    console.log('useEffect []');
    updateProfileInfo();
  }, []);

  useEffect(() => {
    console.log('useEffect [props.match.params.userId]');
    updateProfileInfo();
  }, [props.match.params.userId]);

  return <Profile {...props} isOwner={!props.match.params.userId} />;
};

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
    uploadAvatarThunk,
  })
)(ProfileContainerWithHooks);
