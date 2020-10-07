import React from 'react';
import { Container,Box } from '@material-ui/core'; 
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
	root:{
       marginTop:'32px',
       '& select':{
       	 minWidth:'4rem',
       	 paddingTop:'0.45rem',
       	 paddingBottom:'0.45rem',
       	 '& option':{
       	 	fontSize:'0.9rem',
       	 }
       }
	}
}));

function ImageDropDownSection(props){

	const { sectionCount,staticImageSection,changeStaticImageSection }=props;
	let optionsArr=new Array(sectionCount).fill('');

	const handleChange=(event)=>{

          changeStaticImageSection(event.target.value);

	}

	const classes=useStyles();

     return(
     	<Container className={classes.root}>
     	   <Box display="flex" alignItems="center">
     	   	 <Box mr={2}><strong>Select Image Section </strong></Box>	
             <Select native variant='filled' value={staticImageSection} onChange={handleChange} >
             	<option value={-1}></option>
             	{
             		optionsArr.map((a,index)=><option value={index} key={index}>{`Image ${index+1}`}</option>)
             	}
             </Select>
     	   </Box>
     	</Container>
     );	

}

export default ImageDropDownSection;