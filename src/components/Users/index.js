import React, { Component } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import SingleUserEdit from './SingleUserEdit';
import SingleUserPreview from './SingleUserPreview';

class UserComponent extends Component {
  state = {
    users: [],
    editableForm: false,
    popupVisibility: false,
    editUserId: undefined,
  };

  componentDidMount() {
    this.update();
  }

  get initialUserData() {
    const { editUserId, users } = this.state;
    // console.log(typeof users.find(user => user.id  === editUserId).map(user => user.id));
    return users.find(user => user.id === editUserId);
  }

  update = () => {
    axios.get('https://jsonplaceholder.typicode.com/users/').then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }

  editForm = () => {
    this.setState({
      editableForm: true,
    });
  };

  showUserDetails = (editUserId) => {
    const { popupVisibility } = this.state;
    this.setState({
      popupVisibility: !popupVisibility,
      editableForm: false,
      editUserId,
    });
  };

  fakeUpdate = (newData) => {
    console.log('newData');
    const { popupVisibility } = this.state;
    this.setState({
      popupVisibility: !popupVisibility,
    })
  }

  render() {
    const { users, editableForm, popupVisibility } = this.state;
    return (
      <Grid container spacing={3}>
        {users.map(user => (
          <SingleUserPreview
            popupVisibility={popupVisibility}
            editForm={this.editForm}
            key={user.id}
            user={user}
            showUserDetails={this.showUserDetails}
          />
        ))}

        {this.initialUserData && (
          <SingleUserEdit
            showAndHidePopup={this.showUserDetails}
            popupVisibility={popupVisibility}
            editForm={this.editForm}
            userData={this.initialUserData}
            editableForm={editableForm}
            update={this.update}
            fakeUpdate={this.fakeUpdate}

          />
        )}
      </Grid>
    );
  }
}
export default UserComponent;
