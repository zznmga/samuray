import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setProfile } from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  componentDidMount() {
    console.log('componentDidMount PC');
    let userId = this.props.match.params.userId || 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((result) => {
        this.props.setProfile(result.data);
      });
  }

  render() {
    console.log('render PC');
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, { setProfile })(
  withRouter(ProfileContainer)
);
