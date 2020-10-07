import React , { useEffect }from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import { MaxFileSize,SupportedFileTypes } from './constants.js';

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
        '& > div.MuiDropzoneArea-textContainer':{
            display:'none'
        },
        '& > div.MuiDropzonePreviewList-root':{
            width:'100%',
            height:'100%',
            margin:'0px',
            '& > div':{
                padding:'2px',
                height:'100%',
                maxWidth:'unset',
                flexBasis:'unset',
                flexGrow:1,
                '& > img':{
                    width:'100%',
                    height:'100%'
                }
            }
        }        
    }    	
}));


function ImageDropZone(props){

    const { imageObj,imageNo,sectionId,handlePageState,reqImageDimension } = props;

    useEffect(()=>{
        if(imageObj){
           let filePromise = new Promise((resolve,rejected)=>{
               fileDimensionCheck(imageObj,resolve);
           });
           filePromise.then(dimensionCorrect=>{
               if(!dimensionCorrect){
                    document.querySelector(`#dropZone${sectionId+imageNo} .MuiDropzonePreviewList-root`).style.display='none';

                    //Show incorrect file message to user.
                    let wrongDimensionMsg = 'Kindly select image in given dimensions';
                    handlePageState('INCORRECT_FILE_REMOVE',sectionId,imageNo,wrongDimensionMsg); 
                                    
               }else{
                    document.querySelector(`#dropZone${sectionId+imageNo} .MuiDropzonePreviewList-root`).style.display='flex';

                    //Show success message to user
                    let removeImageBtn=document.querySelector(`#dropZone${sectionId+imageNo} .MuiDropzonePreviewList-removeButton`); 
                    removeImageBtn.addEventListener('click',handleFileDelete); 
               }
           }).catch(err=>{
              console.log('Some error in  reading file');
           });           
        }else{
            let imageComponent=document.querySelector(`#dropZone${sectionId+imageNo} .MuiDropzonePreviewList-root`);
            if(imageComponent){
               imageComponent.style.display='none';
            }
        }        
    },[imageObj]);


    const fileDimensionCheck=(fileObj,resolve)=>{
        let reader = new FileReader();
        reader.readAsDataURL(fileObj);
        reader.onload=function(e){
            let image = new Image();
            image.src = e.target.result;
            image.onload=function(e){
                if(this.width===reqImageDimension.width && this.height===reqImageDimension.height){
                    resolve(true);
                }else{
                    resolve(true);
                }
            }
        }
    }

	const classes=useStyles();

    const handleFileChange=(fileArr)=>{

      if(fileArr && fileArr.length===0){
        return;
      }
      handlePageState('FILE_CHANGE',sectionId,imageNo,fileArr[0]);                 
         
    }

    const handleFileDelete=(event)=>{

       event.stopPropagation();
       handlePageState('OPEN_FILE_DELETE_CONFIRMATION_MODAL',sectionId,imageNo);
       
    }

    const handleFileRejection=(fileArr)=>{
        
        let rejectionReason=getFileRejectionReason(fileArr[0]);
        handlePageState('SHOW_CUSTOM_MESSAGE',rejectionReason,'error');
    }

    const getFileRejectionReason=(fileObj)=>{
        let tempArr = fileObj.name.split('.');
        let fileExt = tempArr[tempArr.length-1];
        if(SupportedFileTypes.indexOf(fileExt)===-1){
            return 'Incorrect File Type';
        }else if(fileObj.size>MaxFileSize){
            return 'File size exceeds max-size , Please select another file...';
        }
        return 'Some unknown file error';
    }

    return(
        	<DropzoneArea 
        	        dropzoneText="Upload Background Image"
        	        filesLimit={1}
                    maxFileSize={MaxFileSize}
        	        acceptedFiles={['image/png','image/jpeg']}
        	        dropzoneClass={`${classes.root} uploadIconColor uploadTextColor ${imageObj?classes.dropZoneWithImage:''}`}
                    onChange={handleFileChange}
                    showAlerts={false}
                    onDropRejected={handleFileRejection}
        	/>
    );

}

export default ImageDropZone;