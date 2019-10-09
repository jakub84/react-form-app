import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const ConfirmDelete = ({ confirmVisible, deleteItem, closeConfirmModal }) => (
  <Dialog open={confirmVisible} onClose={closeConfirmModal}>
    <DialogContent style={{ textAlign: 'center', padding: '30px' }}>
      <DialogContentText id="alert-dialog-description">
        Are you sure you want to delete?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={closeConfirmModal} color="primary" autoFocus>
        Close
      </Button>
      <Button onClick={deleteItem} color="secondary">
        Delete
      </Button>
    </DialogActions>
  </Dialog>
);
export default ConfirmDelete;
