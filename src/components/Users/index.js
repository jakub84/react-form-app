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
    editUserId: null,
  };

  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  };

  get initialUserData() {
    const { editUserId, users } = this.state;
    return users.find(user => user.id === editUserId);
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

        <SingleUserEdit
          showAndHidePopup={this.showUserDetails}
          popupVisibility={popupVisibility}
          editForm={this.editForm}
          userData={this.initialUserData}
          editableForm={editableForm}
          handleSubmit={this.handleSubmit}
        />
      </Grid>
    );
  }
}
export default UserComponent;
