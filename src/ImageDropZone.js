import React from 'react';
import {DropzoneArea} from 'material-ui-dropzone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
    root:{
    	minHeight:'unset',
    	borderStyle:'solid',
    	borderWidth:'2px',
        height:'140px',
    	'& p':{
    		fontSize:'0.8rem',
    		fontWeight:600
    	},
    	'& svg':{
    		
    	}
    },
    dropZoneWithImage:{
        '& div.MuiDropzoneArea-textContainer':{
            display:'none'
        },        
    }    	
}));

function ImageDropZone(props){

    const { imageObj,imageNo,sectionId,handlePageState } = props;

	const classes=useStyles();

    const handleFileChange=(fileArr)=>{

      if(fileArr && fileArr.length===0){
        return;
      }
      handlePageState('Adding',fileArr[0],sectionId,imageNo);                 
         
    }

    const handleFileDelete=(fileObj)=>{

       handlePageState('Removing',fileObj,sectionId,imageNo);                 

    }

    return(
    	<DropzoneArea 
    	        dropzoneText="Upload Background Image"
    	        filesLimit={1}
                maxFileSize={5242880}
    	        acceptedFiles={['image/png','image/jpeg']}
    	        dropzoneClass={`${classes.root} uploadIconColor uploadTextColor ${imageObj?classes.dropZoneWithImage:''}`}
                fileObjects={[imageObj]}
                onChange={handleFileChange}
                onDelete={handleFileDelete}
    	/>
    );

}

export default ImageDropZone;