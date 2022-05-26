import React from 'react'
import NavigationBar from '../NavigationBar'
import { Link } from 'react-router-dom'
import { Box,
  Button, 
  Card, 
  CardContent, 
  Grid,
  Typography } from '@mui/material'

function Account() {
  return (
    <div>
      
        <NavigationBar />
        
      <Box
      component="div"
      display="flex"
      marginTop="150px"
      textAlign={"center"}
      justifyContent="center"
      backgroundColor="#fff"
      >
      <Box
        marginTop="30px"
        display="flex"
        justifyContent="center"
        width={'30%'}
        >

        <Grid container>
          <Grid item xs={12} >
            <Typography variant="h4" color="#2796FD">
              <b>Login </b>
            </Typography>

            <br /> <br />
            <br /> <br />
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container
                  spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6" color="#2796FD" >
                        Please enter account 
                        <br />details
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      
                        <CardContent>
                          <Typography  textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}}>
                            Email:
                            <br/> 
                            <input type="text" name="user" />
                          </Typography>
                          <Typography textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}}> 
                          <br/>
                            Password:
                            <br/>
                            <input type="password" name="password" />
                          </Typography>
                          <br/>
                          <Typography  as={Link} to="/MakeAcc" style={{fontWeight: "bold"}}>
                            Click here to make login
                          </Typography>
                        </CardContent>
                     
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}
                        display="flex"
                        justifyContent="center"
                    >
                      <Button size="large" variant="contained" style={{backgroundColor:"#2796FD"}}>
                        Sign In
                      </Button>
                    </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </div>
  )
}

export default Account