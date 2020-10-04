import React , { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'; 
import { DefaultImageSectionCount } from './constants.js';
import ImagesUploadSection from './ImagesUploadSection.js';
import SaveCancelSection from './SaveCancelSection.js';
import { makeStyles } from '@material-ui/core/styles';
import PageHeader from './PageHeader.js';

const useStyles=makeStyles(theme=>({
	imageSectionsContainer:{
		maxHeight:'70vh',
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
		 return initialState;
	}

	const [pageState,setPageState]=useState(()=>setInitialState());
	const classes=useStyles();

	useEffect(()=>{
      
	},[]);

	const handlePageState=(operationType,fileObj,sectionId,imageNo)=>{

       let newPageState = {...pageState};
       if(operationType==='Adding'){
            newPageState[sectionId][imageNo]=fileObj;
       }else if(operationType==='Removing'){
            newPageState[sectionId][imageNo]=null;
       }
       setPageState(newPageState);
	}

	return(
	  <>
	    <PageHeader/>
		<Container className={classes.imageSectionsContainer}>
			{ 
			  Object.keys(pageState).map((sectionId)=><ImagesUploadSection 
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