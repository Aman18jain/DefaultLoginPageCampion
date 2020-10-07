import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Container } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
	root:{
       position:'static',
       display:'block',
       transform:'unset',
       '& > div':{
       	   fontFamily:'Arial, Helvetica, sans-serif',	
	       boxShadow:'none',
	       borderStyle:'solid',
	       borderWidth:'1px',
	       paddingTop:'2px',
	       paddingBottom:'2px'
       }
	}

}));

function CustomMessage(props){
    
	const { show,message,type,handlePageState }=props;
	const classes=useStyles();

	const closeCustomMessage=()=>{
		handlePageState('CLOSE_CUSTOM_MESSAGE');
	}

	return(
		<Container>
	      <Snackbar
	        className={`${classes.root} file${type}`}
	        open={show}
	        autoHideDuration={5000}
	        onClose={closeCustomMessage}
	        message={message}
	        action={
	            <IconButton size="small" aria-label="close" color="inherit" onClick={closeCustomMessage}>
	              <CloseIcon fontSize="small" />
	            </IconButton>
	        }
	      />
	    </Container>  		
	);

}

export default CustomMessage;
