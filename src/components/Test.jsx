import { Grid, Typography, Box, Avatar, IconButton, ToggleButtonGroup, ToggleButton } from '@mui/material';
import avatar from '../utlis/avatar_1.png';
import LogoutIcon from '@mui/icons-material/Logout';


const Test = () => {
  return (
    <Box sx={{ height: 70, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2.5, px: 2 }} style={{ backgroundColor: "#F7C12C" }}>
          <IconButton sx={{ mr: 8 }}>
            <LogoutIcon fontSize='large' />
          </IconButton>

          <Avatar alt="Remy Sharp" src={avatar} />

          <Typography variant="h5">NABIN DHAKHAL</Typography>
        </Box>
  )
}

export default Test