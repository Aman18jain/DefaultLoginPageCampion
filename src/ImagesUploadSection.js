import React from 'react';
import ImageDropZone from './ImageDropZone.js';
import LoginBoxAlignment from './LoginBoxAlignment.js';
import Grid from '@material-ui/core/Grid';
import { Container,Box } from '@material-ui/core';   
import {ImagesInSectionCount} from './constants.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
   root:{
   	 '& > div:first-child':{
   	 	marginRight:'32px'
   	 }
   },
   dimensionStyle:{
   	fontSize:'14px'
   },
   headerStyle:{
   	paddingBottom:'4px',
   	paddingTop:'4px'
   },
   containerStyle:{
   	marginBottom:'24px',
   	backgroundColor:'#f9f9f9',
   	boxShadow:'1px 1px 1px 0px #d6d6d6',
   }
}));

function ImagesUploadSection(props){
    
    const classes=useStyles();
    const { sectionInfo,sectionId }=props;
    
	return(
		//<Container className={classes.containerStyle}>
		<Box className={classes.containerStyle}>
			    <div className={classes.headerStyle}>
	              <strong>Image {sectionId+1}</strong>
			    </div>
				<Grid container className={classes.root}>
					<Grid item xs={5} sm={4} md={3}>
		              <div className={classes.dimensionStyle}>(W: 2048px  H: 1536px)</div>
					</Grid>                       
					<Grid item xs={5} sm={4} md={3}>
		              <div className={classes.dimensionStyle}>(W: 2048px  H: 1152px)</div>
					</Grid>
				</Grid>
				<Grid container className={`${classes.root}`}>
				    <Grid item xs={5} sm={4} md={3}><ImageDropZone 
				    									imageObj={sectionInfo[0]} 
				    									imageNo={0}
				    									sectionId={sectionId} 
				    									handlePageState={props.handlePageState} 
				    								/>
				    </Grid>
				    <Grid item xs={5} sm={4} md={3}><ImageDropZone 
				    									imageObj={sectionInfo[1]} 
				    									imageNo={1}
				    									sectionId={sectionId} 
				    									handlePageState={props.handlePageState} 
				    								/>
				    </Grid>
				</Grid>
				<LoginBoxAlignment 
							loginBoxAlignment={sectionInfo.loginBoxAlignment} 
							handlePageState={props.handlePageState}
				/>	
		</Box>		
		//</Container>		
	);



}

export default ImagesUploadSection;