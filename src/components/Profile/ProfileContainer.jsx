import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setProfile, getProfileThunk } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || 2;
    this.props.getProfileThunk(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default withAuthRedirect(
  connect(mapStateToProps, { setProfile, getProfileThunk })(
    withRouter(ProfileContainer)
  )
);
