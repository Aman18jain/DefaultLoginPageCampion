import React from 'react';
import { Container } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
	instrHeader:{
         fontWeight:600,
         marginBlockEnd:'0em'
	},
	root:{
		marginBottom:'16px'
	},
	instrBody:{
		[theme.breakpoints.down('xs')]:{
            fontSize:'0.7rem'
		},
		fontSize:'1rem'
	}
}));

function PageHeader(){

	  const classes=useStyles();

      return(
      	<Container className={classes.root}>
      	 	<h2>Manage Default Login Page</h2>
      	 	<div className={classes.instrBody}>
	      	 	<p className={classes.instrHeader}>Instructions for Uploading Background Images</p>	
	      	 	<div>1. File size should not exceed 5 MB</div>
	      	 	<div>2. Upload Thumbnail Image(.png/.jpg/.jpeg)</div>
	      	</div> 	
      	</Container>
      );
}

export default PageHeader;