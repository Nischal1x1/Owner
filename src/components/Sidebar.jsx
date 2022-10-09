import { Grid, Typography, Box, Avatar, IconButton, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../utlis/logo.png';
import avatar from '../utlis/avatar_1.png';
import { useState } from 'react';
import Dashboard from './Dashboard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

const categories = [
    { name: 'Dashboard', icon: <DashboardIcon/>, link: "/" },
    { name: 'Order List', icon: <FactCheckIcon />, link: "orderlist" },
    { name: 'Order History', icon: <ManageHistoryIcon />, link: "orderhistory" },
    { name: 'Customer Care', icon: <SupportAgentIcon />, link: "customercare" }
  ];

const Sidebar = () => {
    const [view, setView] = useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
    return (
        <Box  sx={{ backgroundColor: "#0F1B2A", position:'absolute', width:'20%', top : 0, height: '100vh' }}  >
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
                sx={{ mt: 6 }}
            >

                {
                    categories.map((category) => (
                        <ToggleButton value={category.name} aria-label={category.name} component={Link} to={category.link} fullWidth color="info" sx={{ display: 'flex', justifyContent: "flex-start", pl: '25%', fontSize: '1.3rem', mt: 2 }}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography color="#fff"> {category.icon} </Typography>
                                <Typography sx={{ ml: 1 }} color="#fff"> {category.name}</Typography>
                            </Box>
                        </ToggleButton>))}
            </ToggleButtonGroup>

        </Box>
    )
}

export default Sidebar