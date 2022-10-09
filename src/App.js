import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Grid } from '@mui/material'
import { Feed, Coupon, Dashboard, Test, Sidebar } from './components';
import React from 'react';

const App = () => {

  return (
    <BrowserRouter>

      <Test />

      <Grid container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>

        <Grid item xs={9}>
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
          </Routes>
        </Grid>
      </Grid>


    </BrowserRouter>

  );
}

export default App;
