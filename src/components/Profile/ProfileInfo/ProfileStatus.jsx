import React from 'react';

class ProfileStatus extends React.Component {
  constructor(props) {
    console.log('Constructor ProfileStatus', props);
    super(props);
    this.state = {
      editMode: false,
      status: props.status,
    };
  }

  componentDidMount() {
    console.log('ComponentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
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
