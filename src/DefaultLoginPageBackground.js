import React , { useState, useEffect } from 'react';
import { Container,Box } from '@material-ui/core'; 
import { DefaultImageSectionCount } from './constants.js';
import ImagesUploadSection from './ImagesUploadSection.js';
import SaveCancelSection from './SaveCancelSection.js';
import { makeStyles } from '@material-ui/core/styles';
import PageHeader from './PageHeader.js';
import CustomMessage from './CustomMessage.js';
import TimeIntervalSection from './TimeIntervalSection.js';
import ImageDropDownSection from './ImageDropDownSection.js';
import Button from '@material-ui/core/Button';
import CustomConfirmationModal from './CustomConfirmationModal.js';

const useStyles=makeStyles(theme=>({
	imageSectionsContainer:{
		maxHeight:'55vh',
		overflowY:'scroll',
	}
}));

function DefaultLoginPageBackground(){

	const setInitialState=()=>{
		 
		 let initialState={};
		 for(let i=0;i<DefaultImageSectionCount;i++){
            initialState[i]={
		 		0:null,
		 		1:null,
		 		loginBoxAlignment:'center'
		 	}
		 }
		 initialState.customMessage={
		 	show:false,
		 	message:'',
		 	type:''
		 };
		 initialState.customConfirmationModal={
            show:false,
            sectionId:-1,
            imageNo:-1
		 };
		 initialState.rotationTimeInterval=null;
		 initialState.staticImageSection=-1;
		 return initialState;
	}

	const [pageState,setPageState]=useState(()=>setInitialState());

	const classes=useStyles();

	useEffect(()=>{
      //Get API to fetch saved page information
	},[]);

	const handlePageState=(operationType,...restParams)=>{

       let newPageState = {...pageState};

       if(operationType==='FILE_CHANGE'){

       	    let [sectionId,imageNo,fileObj] = restParams;
            newPageState[sectionId][imageNo] = fileObj;

       }
       else if(operationType==='INCORRECT_FILE_REMOVE'){

       	    let [sectionId,imageNo,message] = restParams;
            newPageState[sectionId][imageNo] = null;
            newPageState.customMessage={
            	show:true,
            	message:message,
            	type:'error'
            };

       }
       else if(operationType==='LOGIN_BOX_ALIGNMENT'){

       	    let [sectionId,loginBoxAlignment] = restParams; 
            newPageState[sectionId].loginBoxAlignment = loginBoxAlignment;

       }
       else if(operationType==='SHOW_CUSTOM_MESSAGE'){

       	    newPageState.customMessage={
       	    	show:true,
       	    	message:restParams[0],
       	    	type:restParams[1]
       	    }

       }
       else if(operationType==='CLOSE_CUSTOM_MESSAGE'){

       	    newPageState.customMessage={
       	    	show:false,
       	    	message:'',
       	    	type:''
       	    }

       }
       else if(operationType==='OPEN_FILE_DELETE_CONFIRMATION_MODAL'){

       	    newPageState.customConfirmationModal={
       	    	show:true,
       	    	sectionId:restParams[0],
       	    	imageNo:restParams[1]
       	    };
       }
       else if(operationType==='CLOSE_FILE_DELETE_CONFIRMATION_MODAL'){

            let isDeleteConfirm=restParams[0];
            let { sectionId,imageNo }= newPageState.customConfirmationModal;
            if(isDeleteConfirm){
            	newPageState[sectionId][imageNo]=null;
            }
       	    newPageState.customConfirmationModal={
       	    	show:false,
       	    	sectionId:-1,
       	    	imageNo:-1
       	    }

       }
       setPageState(newPageState);
	}
    
    const addImageSection=()=>{

    	let newPageState={...pageState};
    	let currentSectionsCount=Object.keys(newPageState).length-4;
    	newPageState[currentSectionsCount]={
    		0:null,
    		1:null,
    		loginBoxAlignment:'center'
    	};
    	newPageState.customMessage={
    		show:true,
    		message:'New image section added successfully',
    		type:'success'
    	};
    	setPageState(newPageState);
    }

    const changeStaticImageSection=(selectedSection)=>{

    	let newPageState={...pageState};
    	newPageState.staticImageSection=selectedSection;
    	setPageState(newPageState);

    }

    let sectionKeys=Object.keys(pageState).filter(key=>Number(key)>=0);
    let displayAddSectionBtn=true;
    let staticImage=false;//i.e no image rotation
	return(
	  <>
	    <CustomConfirmationModal show={pageState.customConfirmationModal.show}
	    						 handlePageState={handlePageState}
	    />
	    <CustomMessage show={pageState.customMessage.show} 
	    			   type={pageState.customMessage.type} 
	    			   message={pageState.customMessage.message}
	    			   handlePageState={handlePageState}
	    />	
	    <PageHeader/>
		<Container className={classes.imageSectionsContainer}>
			{ 
			  sectionKeys.map((sectionId)=><ImagesUploadSection 
			   											sectionInfo={pageState[sectionId]}
			   											sectionId={sectionId} 
			   											key={sectionId} 
			   											handlePageState={handlePageState}
			   									  	  />
			   				            )
			}
			{
               displayAddSectionBtn?(<Box display="flex" justifyContent="flex-end">
            						<Button onClick={addImageSection} disableElevation variant='contained' color='primary'>Add Section</Button>
            					 </Box>):null 
			}
		</Container>
        {
        	!staticImage ? <TimeIntervalSection /> : (<ImageDropDownSection sectionCount={Object.keys(pageState).length-4}
        																    staticImageSection={pageState.staticImageSection} 
        																    changeStaticImageSection={changeStaticImageSection}
        											 />)  
        }
		<SaveCancelSection />
      </>
	);

}

export default DefaultLoginPageBackground;