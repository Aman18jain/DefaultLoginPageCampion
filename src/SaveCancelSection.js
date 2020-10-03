import React from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

const useStyles=makeStyles(theme=>({
	root:{
		marginTop:'16px'
	},
	buttonCommonStyle:{
		padding:'4px 10px',
		fontSize:'0.75rem',
		letterSpacing:'0.1em',
		marginRight:'0.5rem',
		'& svg':{
			fontSize:'1.2rem'
		}
	}
}));

function SaveCancelSection(){

	const classes=useStyles();

	return(
		<Container className={classes.root}>
			<Button disableElevation variant='contained' color='primary' className={classes.buttonCommonStyle}><DoneOutlinedIcon/> Save</Button>
			<Button disableElevation variant='outlined' className={`${classes.buttonCommonStyle} cancelBtnStyle`}><ClearOutlinedIcon/> Cancel</Button>
		</Container>
	);
}

export default SaveCancelSection;