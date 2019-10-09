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
    confirmVisible: false,
  };

  componentDidMount() {
    this.update();
  }

  get initialUserData() {
    const { editUserId, users } = this.state;
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
        notes: newData.notes,
      }
      : updatedUser));
    this.setState({
      users: userNewValues,
      popupVisibility: !popupVisibility,
    });
  };

  resetId = () => {
    this.setState({
      editUserId: undefined,
    });
  };

  fakeDeleteItem = () => {
    const { popupVisibility, users, editUserId } = this.state;
    this.setState({
      users: users.filter(user => user.id !== editUserId),
      popupVisibility: !popupVisibility,
      confirmVisible: false,
    });
  };

  showConfirmModal = () => {
    this.setState({
      confirmVisible: true,
    });
  };

  closeConfirmModal = () => {
    this.setState({
      confirmVisible: false,
    });
  };

  render() {
    const {
      users, editableForm, popupVisibility, confirmVisible,
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
            editForm={this.editForm}
            userData={this.initialUserData}
            editableForm={editableForm}
            update={this.update}
            fakeUpdate={this.fakeUpdate}
            deleteItem={this.fakeDeleteItem}
            resetId={this.resetId}
            showConfirmModal={this.showConfirmModal}
            closeConfirmModal={this.closeConfirmModal}
            confirmVisible={confirmVisible}
          />
        )}
      </Grid>
    );
  }
}
export default UserComponent;
