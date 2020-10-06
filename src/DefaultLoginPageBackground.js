import React , { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'; 
import { DefaultImageSectionCount } from './constants.js';
import ImagesUploadSection from './ImagesUploadSection.js';
import SaveCancelSection from './SaveCancelSection.js';
import { makeStyles } from '@material-ui/core/styles';
import PageHeader from './PageHeader.js';
import CustomMessage from './CustomMessage.js';

const useStyles=makeStyles(theme=>({
	imageSectionsContainer:{
		maxHeight:'64vh',
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
		 return initialState;
	}

	const [pageState,setPageState]=useState(()=>setInitialState());
	const classes=useStyles();

	useEffect(()=>{
      
	},[]);

	const handlePageState=(operationType,sectionId,...restParams)=>{

       let newPageState = {...pageState};
       if(operationType==='Adding'){
            newPageState[sectionId][restParams[0]]=restParams[1];
       }else if(operationType==='Removing'){
            newPageState[sectionId][restParams[0]]=null;
       }else if(operationType==='LoginBoxAlignment'){
            newPageState[sectionId].loginBoxAlignment=restParams[0];
       }else if(operationType==='ShowCustomMessage'){
            newPageState.customMessage.show=true;
            newPageState.customMessage.message=restParams[0];
            newPageState.customMessage.type=restParams[1];
       }else if(operationType==='CloseCustomMessage'){
            newPageState.customMessage.show=false;
            newPageState.customMessage.message='';
            newPageState.customMessage.type='';

       }
       setPageState(newPageState);
	}
    let sectionKeys=Object.keys(pageState).slice(0,Object.keys(pageState).length-1);
	return(
	  <>
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
		</Container>
		<SaveCancelSection />
      </>
	);

}

export default DefaultLoginPageBackground;