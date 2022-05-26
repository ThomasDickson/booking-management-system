import React from 'react'
import NavigationBar from '../NavigationBar'
import { Link } from 'react-router-dom'
import { Box,
  Button, 
  Card, 
  CardContent, 
  Grid,
  Typography } from '@mui/material'

function Test() {
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
              <b>Make New Account </b>
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
                        Please enter your 
                        <br />details
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      
                        <CardContent>
                        <Typography  textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}} required>
                            First Name:
                            <br/> 
                            <input type="text" name="fname" />
                        </Typography>
                        <br/>
                        <Typography  textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}} required>
                            Last Name:
                            <br/> 
                            <input type="text" name="lname" />
                        </Typography>
                        <br/>
                        <Typography  textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}} required>
                            DOB:
                            <br/> 
                            <input type="date" name="birhtday" />
                        </Typography>
                        <br/>
                        <Typography  textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}} required>
                            Address:
                            <br/> 
                            <input type="text" name="address" />
                        </Typography>
                        <br/>
                        <Typography  textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}} required>
                            City:
                            <br/> 
                            <input type="text" name="city" />
                        </Typography>
                        <br/>
                        <Typography  textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}} required>
                            PostCode:
                            <br/> 
                            <input type="number" name="postcode"   min="200" max="9944"/>
                        </Typography>
                        <br/>
                        <Typography  textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}} required>
                        <label for="states">State:</label>
                        <br/>
                        <select name="states" id="states">
                          <option value="NSW">NSW</option>
                          <option value="VIC">VIC</option>
                          <option value="ACT">ACT</option>
                          <option value="SA">SA</option>
                          <option value="NT">NT</option>
                          <option value="WA">WA</option>
                          <option value="TAS">TAS</option>
                        </select>
                        </Typography>
                        <br/>
                          <Typography  textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}} required>
                            Email:
                            <br/> 
                            <input type="text" name="user" />
                          </Typography>
                          <Typography textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}} required> 
                          <br/>
                            Password:
                            <br/>
                            
                            <input type="password" name="password" />
                          </Typography>
                          <br/>
                          <Typography  as={Link} to="/Account" style={{fontWeight: "bold"}} type="submit" required>
                            Click here if you have login
                          </Typography>
                        </CardContent>
                     
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}
                        display="flex"
                        justifyContent="center"
                    >
                      <Button size="large" variant="contained" style={{backgroundColor:"#2796FD"}} display = "flex" required>
                        Create Account
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

export default Test