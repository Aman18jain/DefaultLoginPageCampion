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
		 let imageSections=new Array(DefaultImageSectionCount).fill('');
         return imageSections.map((a,index)=>{
         	return {
         		imageSectionId:index+1,
         		firstImage:{
         			imageNo:1,
         			fileExist:false,
         			fileObj:null
         		},
         		secondImage:{
                    imageNo:2,
         			fileExist:false,
         			fileObj:null
         		},
         		loginBoxAlignment:'center'
         	};
         });
	}

	const [pageState,setPageState]=useState(()=>setInitialState());
	const classes=useStyles();

	useEffect(()=>{
      //It will get executed on component mount
      //Will call GET API to fetch the saved page information
      console.log('Component Did Mount');
	},[]);

	const handlePageState=()=>{
       console.log('We are in handlePageState');
       setPageState([]);
	}

	return(
	  <>
	    <PageHeader/>
		<Container className={classes.imageSectionsContainer}>
			{ 
			   pageState.map((imageSectionInfo)=><ImagesUploadSection 
			   										imageSectionInfo={imageSectionInfo} 
			   										key={imageSectionInfo.imageSectionId} 
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