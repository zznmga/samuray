import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div>
      <div className={s.descriptionInfo}>ava + description</div>
      <div>
        <img src={props.profile.photos.small} alt="" />
      </div>
      <div>
        <ProfileStatus status={'I am React developer'} />
      </div>
    </div>
  );
};

export default ProfileInfo;
