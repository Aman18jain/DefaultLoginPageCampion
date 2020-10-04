import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Box } from '@material-ui/core';  
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
	root:{
      '& span':{
      	fontSize:'0.8rem',
      	paddingRight:'2px',
      	paddingTop:'2px',
      	paddingBottom:'2px',
      	'& svg':{
      		width:'0.8em',
      		height:'0.8em'
      	}
      }
	},
	deviceSizeStyle:{
		[theme.breakpoints.down('xs')]:{
			flexDirection:'column'
		},
		[theme.breakpoints.up('sm')]:{
			flexDirection:'row'
		}
	},
	labelStyle:{
		fontSize:'0.9rem',
		marginRight:'12px'
	}

}));

function LoginBoxAlignment(props){
      const classes=useStyles();
      return(
      	<Box display="flex" alignItems="center" pt={1} pb={1}>
      	 <FormLabel className={`${classes.labelStyle} alignmentText`} component="legend">Login Box Alignment:</FormLabel>
         <RadioGroup aria-label="position" name="position" defaultValue={props.loginBoxAlignment} className={`${classes.root} ${classes.deviceSizeStyle}`}>
           <FormControlLabel value="left" control={<Radio color="primary" />} label="Left Aligned" />
           <FormControlLabel value="center" control={<Radio color="primary" />} label="Center Aligned" />
           <FormControlLabel value="right" control={<Radio color="primary" />} label="Right Aligned" />
         </RadioGroup>
        </Box> 
      );
}

export default LoginBoxAlignment;