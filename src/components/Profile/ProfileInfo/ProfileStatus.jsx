import React from 'react';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
  }

  activateEditMode = (e) => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = (e) => {
    this.setState({ editMode: false });
  };

  onInputFocus = (e) => {
    e.target.select();
  };

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              autoFocus={true}
              onFocus={this.onInputFocus}
              onBlur={this.deactivateEditMode}
              type="text"
              defaultValue={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
