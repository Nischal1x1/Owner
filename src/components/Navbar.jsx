import { Grid, Typography, Box, Avatar, IconButton, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../utlis/logo.png';
import avatar from '../utlis/avatar_1.png';
import { categories } from '../utlis/constants';
import { useState } from 'react';
import Dashboard from './Dashboard';

const Navbar = () => {
  const [view, setView] = useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (


    <Grid container sx={{ height: 1080 }}>
      <Grid item xs={3} style={{ backgroundColor: "#0F1B2A" }} >
        <Link to='/' style={{ display: 'flex', alignItems: 'center', justifyContent: "center", marginTop: '10px' }}>

          <img src={logo} alt="logo"
            height={50}
          />
        </Link>



        <ToggleButtonGroup
          orientation="vertical"
          value={view}
          exclusive
          fullWidth
          onChange={handleChange}
          sx={{mt:6}} 
        >

          {
            categories.map((category) => (
              <ToggleButton value={category.name} aria-label={category.name} component={Link} fullWidth color="info" sx={{ display: 'flex', justifyContent: "flex-start", pl: '25%', fontSize: '1.3rem', mt: 2 }}>
                <Box sx={{display:'flex'}}>
                  <Typography color="#fff"> {category.icon} </Typography>  
                  <Typography sx={{ ml: 1 }} color="#fff"> {category.name}</Typography> 
                  </Box>
              </ToggleButton>))}
        </ToggleButtonGroup>

      </Grid>
      <Grid item xs={9}  >
        <Box sx={{ height: 70, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2.5, px: 2 }} style={{ backgroundColor: "#F7C12C" }}>
          <IconButton sx={{ mr: 8 }}>
            <LogoutIcon fontSize='large' />
          </IconButton>

          <Avatar alt="Remy Sharp" src={avatar} />

          <Typography variant="h5">NABIN DHAKHAL</Typography>
        </Box>
        
        
      </Grid>
    </Grid>

  );
}

export default Navbar;