import {Breadcrumbs} from '@mui/material';
import React from 'react';
import { MdNavigateNext } from "react-icons/md";



const Breadcrump = () => {
	return(
		<div>
		<Breadcrumbs seperator={<MdNavigateNext />} fontSize="small" aria-label="breadcrumb">
			
		</Breadcrumbs>
		</div>
	)
}

export default Breadcrump;
