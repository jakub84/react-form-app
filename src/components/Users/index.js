import React, { Component } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import SingleUser from './SingleUser';

class UserComponent extends Component {
  state = {
    users: [],
    editableForm: false,
    popupVisibility: false,
  };

  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      this.setState({
        users: res.data,
      });
    });
  };

  editForm = () => {
    this.setState({
      editableForm: true,
    });
  };

  showAndHidePopup = () => {
    const { popupVisibility } = this.state;
    this.setState({
      popupVisibility: !popupVisibility,
      editableForm: false,
    });
  };

  onSubmit = (data) => {
    console.log(data)
  }

  render() {
    const { users, editableForm, popupVisibility } = this.state;
    return (
      <Grid container spacing={3}>
        {users.map(user => (
          <SingleUser
            showAndHidePopup={this.showAndHidePopup}
            popupVisibility={popupVisibility}
            editForm={this.editForm}
            key={user.id}
            user={user}
            editableForm={editableForm}
            onSubmit={this.onSubmit}
          />
        ))}
      </Grid>
    );
  }
}
export default UserComponent;
