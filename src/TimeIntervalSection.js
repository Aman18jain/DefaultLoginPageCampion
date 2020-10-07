import React from 'react';
import { Container,Box } from '@material-ui/core'; 
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
	root:{
       marginTop:'32px',
       '& input':{
       	 width:'3rem',
       	 paddingTop:'0.45rem',
       	 paddingBottom:'0.45rem'
       }
	}
}));

function TimeIntervalSection(props){
     
     const classes=useStyles();

     return(
     	<Container className={classes.root}>
     	    <Box display="flex" alignItems="center">
     	    	<Box mr={2}><strong>Image Rotation Interval [hrs]</strong></Box>	
     	    	<TextField variant="outlined" size="small"/>
     	    </Box>
     	</Container>
     );
      
}

export default TimeIntervalSection;