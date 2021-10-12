import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NavBar } from '../AppBar/AppBar';

export function DefaultLayout() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <NavBar/>
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={8}>
          
        </Grid>
      </Grid>
  );
}