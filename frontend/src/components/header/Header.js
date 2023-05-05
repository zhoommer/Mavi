import React from "react";
import { Grid, Link } from '@mui/material';
import brandIcon from '../../assets/icons/mavi-logo-orijinal.png';
import './header.css';
const Header = () => {
  return <div className="header-div">
    <Grid container columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
      <Grid xs={12} sm={12} md={12} lg={12} textAlign={'center'} className="border header">
        <Link href="/">
          <img src={brandIcon} alt="mavi-logo" className="mavi-logo"/>
        </Link> 
      </Grid>
    </Grid>
  </div>;
};

export default Header;
