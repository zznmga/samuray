import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user-profile.png';

const ProfileInfo = ({ uploadAvatarThunk, isOwner, ...props }) => {
  const onAvatarChange = (e) => {
    if (e.target.files.length > 0) {
      uploadAvatarThunk(e.target.files[0]);
    }
  };

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
        <img
          src={props.profile.photos.small || userPhoto}
          alt=""
          className={s.imageProfile}
        />
        {isOwner && <input type="file" onChange={onAvatarChange} />}
      </div>
      <div>
        <ProfileStatus
          status={props.status}
          updateStatusThunk={props.updateStatusThunk}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
