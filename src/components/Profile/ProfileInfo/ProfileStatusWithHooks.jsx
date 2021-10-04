import React, { useState, useEffect } from 'react';

export const ProfileStatusWithHooks = (props) => {
  console.log('ProfileStatusWithHooks', props);
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const onChange = (e) => {
    setStatus(e.target.value);
  };

  const deactivate = (e) => {
    setEditMode(false);
    props.updateStatusThunk(status);
  };

  const activate = (e) => {
    setEditMode(true);
  };

  const onInputFocus = (e) => {
    e.target.select();
  };

  useEffect(() => {
    console.log('useEffect', props.status);
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activate}>{props.status || '-------'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            type="text"
            onChange={onChange}
            onBlur={deactivate}
            onFocus={onInputFocus}
            autoFocus={true}
            value={status}
          />
        </div>
      )}
    </div>
  );
};
