import React, { useState } from 'react'
import { auth } from '../../firebase-config'
import '../../App.css'
import {Grid, Button, Box, Typography, Link, Card, CardContent} from '@mui/material'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from '../Login';
import AccountInfo from '../AccountInfo';
import Register from '../Register'



function Test() {
  return (
    <Box
      component="div"
      display="flex"
      marginTop="50px"
      justifyContent="center"
      backgroundColor="#fff"
      >
      <Box
        marginTop="30px"
        display="flex"
        justifyContent="center"
        width={'60%'}
        >
        <Grid container>
          <Grid item xs={12} >
            <Typography variant="h4" color="#2796FD" sx={{userSelect: "none"}}>
              <b>Fly with us. </b>
            </Typography>
            <Typography marginTop="12px" variant="body1" sx={{userSelect: "none"}} >
              Select a flight here from a variety of one-way flights you can embark on!
            </Typography>
            <br />
            <Typography variant="body1" as={Link} to="/">
              <b>Already have a booking? Click here to manage your booking!</b>
            </Typography>
            <br/><br/>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container
                  spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6" color="#2796FD">
                        Make a flight booking
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Card>
                        <CardContent>
                          <Typography variant="body2">
                            Departing from:
                          </Typography>
                          <br/>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card>
                      <CardContent>
                          <Typography variant="body2">
                            Arriving at:
                          </Typography>
                          <br/>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card>
                        <CardContent>
                          <Typography variant="body2">
                            When:
                          </Typography>
                          <br/>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}
                        display="flex"
                        justifyContent="right"
                    >
                      <Button size="large" variant="contained" style={{backgroundColor:"#2796FD"}}>
                        BOOK FLIGHT
                      </Button>
                    </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Test;
