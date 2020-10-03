import React from 'react';
import {DropzoneArea} from 'material-ui-dropzone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
    root:{
    	minHeight:'unset',
    	borderStyle:'solid',
    	borderWidth:'2px',
    	'& p':{
    		fontSize:'0.8rem',
    		fontWeight:600
    	},
    	'& svg':{
    		
    	}
    }	
}));

function ImageDropZone(){

	const classes=useStyles();
    return(
    	<DropzoneArea 
    	        dropzoneText="Upload Background Image"
    	        filesLimit={1}
    	        acceptedFiles={['image/*']}
    	        dropzoneClass={`${classes.root} uploadIconColor uploadTextColor`}
    	/>
    );

}

export default ImageDropZone;