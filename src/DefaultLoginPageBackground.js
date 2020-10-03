import React , { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'; 
import { ImageSectionCount } from './constants.js';
import ImagesUploadSection from './ImagesUploadSection.js';
import SaveCancelSection from './SaveCancelSection.js';
import { makeStyles } from '@material-ui/core/styles';
import PageHeader from './PageHeader.js';

const useStyles=makeStyles(theme=>({
	imageSectionsContainer:{
		maxHeight:'60vh',
		overflowY:'scroll',
	}
}));

function DefaultLoginPageBackground(){

	const [pageState,setPageState]=useState({});
	const classes=useStyles();

	useEffect(()=>{
      //It will get executed on component mount
	},[]);
    
    let imagesSections=new Array(ImageSectionCount).fill('');
	return(
	  <>
	    <Container>
	    	<PageHeader/>
	    </Container>	
		<Container className={classes.imageSectionsContainer}>
			{ 
			   imagesSections.map((a,index)=><ImagesUploadSection sectionNo={index+1} key={index} />)
			}
		</Container>
		<SaveCancelSection />
      </>
	);

}

export default DefaultLoginPageBackground;