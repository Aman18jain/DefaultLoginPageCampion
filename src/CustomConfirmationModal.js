import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';


function ConfirmationModal(props){

	const { show,handlePageState } = props;

	const handleCancel=()=>{
		 let isDeleteConfirm=false;
         handlePageState('CLOSE_FILE_DELETE_CONFIRMATION_MODAL',isDeleteConfirm);
	}

	const handleOk=()=>{
		 let isDeleteConfirm=true;
         handlePageState('CLOSE_FILE_DELETE_CONFIRMATION_MODAL',isDeleteConfirm);
	}

	return(
		<Dialog disableBackdropClick 
				disableEscapeKeyDown
				open={show}
		>
			<DialogTitle id="confirmation-dialog-title">File Remove Confirmation</DialogTitle>
			<DialogActions>
		        <Button autoFocus onClick={handleCancel} color="primary">
		          Cancel
		        </Button>
		        <Button onClick={handleOk} color="primary">
		          Ok
		        </Button>				
			</DialogActions>
		</Dialog>
	);
   
}

export default ConfirmationModal;