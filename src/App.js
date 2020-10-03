import React,{useState} from 'react';
import {DropzoneArea} from 'material-ui-dropzone';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
   dropZoneWithImage:{
    '& div.MuiDropzoneArea-textContainer':{
      display:'none'
    },
    '& div.MuiDropzonePreviewList-root':{
      width:'100%',
      margin:0,
      height:'100%',
      '& > div':{
        padding:'10px',
        maxWidth:'100%',
        flexBasis:'100%',
        '& > img':{
          height:'100%',
          width:'100%'
        }
      }
    }
   },
   appStyle:{
    height:'100vh'
   },
   dropZoneStyle:{
    height:'25vh'
   }
}));

function App() {

    const [localState,setLocalState]=useState({isFileInDropZone:false});
    const classes=useStyles();

    const handleFileChange=(event)=>{

      if(event && event.length===0){
        return;
      }

      var reader = new FileReader();
      reader.readAsDataURL(event[0]);
      reader.onload=function(e){
          var image = new Image();
          image.src = e.target.result;
          image.onload=function(e){
            //Image Dimensions
            console.log(this.height,this.width);
            let formData = new FormData();//In built API
            formData.set('file', event[0]);//event[0] is a file object
            setLocalState({isFileInDropZone:true}); 
          }
      }
      
    }

    const handleFileDelete=(event)=>{
      //event is the file which we are deleting
      setLocalState({isFileInDropZone:false}); 
    }

    return(
      <Grid container justify='center' alignContent='center' className={classes.appStyle}>
       <Grid item md={4}><DropzoneArea 
                              onChange={handleFileChange} 
                              onDelete={handleFileDelete}
                              acceptedFiles={['image/*']}
                              filesLimit={1}
                              dropzoneClass={`${classes.dropZoneStyle} ${localState.isFileInDropZone?classes.dropZoneWithImage:''}`} 
                              dropzoneText="Upload Background Image"
                              maxFileSize={2097152}
                          />
       </Grid>
      </Grid> 
    );
  
}

export default App;














