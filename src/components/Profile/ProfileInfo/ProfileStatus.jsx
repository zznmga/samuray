import React from 'react';

class ProfileStatus extends React.Component {
  constructor(props) {
    console.log('Constructor ProfileStatus');
    super(props);
    this.state = {
      editMode: false,
      status: props.status,
    };
  }

  activateEditMode = (e) => {
    console.log('activate', this.state);
    this.setState({ editMode: true });
  };

  deactivateEditMode = (e) => {
    console.log('deactivate', this.state);
    this.props.updateStatusThunk(this.state.status);
    this.setState({ editMode: false });
  };

  onInputFocus = (e) => {
    e.target.select();
  };

  onChange = (e) => {
    this.setState({ status: e.target.value });
  };

  render() {
    console.log('render ProfileStatus', this.state);
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || '---------'}
            </span>
          </div>
        ) : (
          <div>
            <input
              autoFocus={true}
              onFocus={this.onInputFocus}
              onBlur={this.deactivateEditMode}
              onChange={this.onChange}
              type="text"
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
