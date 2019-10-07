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
    readyToSubmit: false,
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
  };

  editForm = () => {
    const { editableForm } = this.state;
    this.setState({
      editableForm: !editableForm,
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
    const { popupVisibility, users, editUserId } = this.state;
    const userNewValues = users.map(updatedUser => (updatedUser.id === editUserId
      ? {
        ...updatedUser,
        name: newData.name,
        surname: newData.surname,
        phone: newData.phone,
      }
      : updatedUser));
    this.setState({
      users: userNewValues,
      editUserId: null,
      popupVisibility: !popupVisibility,
    });
  };

  fakeDeleteItem = () => {
    const { popupVisibility, users, editUserId } = this.state;
    this.setState({
      users: users.filter(user => user.id !== editUserId),
      popupVisibility: !popupVisibility,
    });
  };

  render() {
    const {
      users, editableForm, popupVisibility, readyToSubmit,
    } = this.state;
    return (
      <Grid container spacing={3}>
        {users.map(user => (
          <SingleUserPreview
            popupVisibility={popupVisibility}
            editForm={this.editForm}
            key={user.id + user.name}
            user={user}
            showUserDetails={this.showUserDetails}
          />
        ))}

        {this.initialUserData && (
          <SingleUserEdit
            showAndHidePopup={this.showUserDetails}
            popupVisibility={popupVisibility}
            readyToSubmit={readyToSubmit}
            editForm={this.editForm}
            userData={this.initialUserData}
            editableForm={editableForm}
            update={this.update}
            fakeUpdate={this.fakeUpdate}
            deleteItem={this.fakeDeleteItem}
          />
        )}
      </Grid>
    );
  }
}
export default UserComponent;
