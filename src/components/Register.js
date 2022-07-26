import React, { useState } from 'react'
import { auth } from '../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { Box,
  Button, 
  Card, 
  CardContent, 
  Grid,
  Typography,
  TextField } from '@mui/material'

function Register() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    
  };
  return (
    <div>
     <Box
      component="div"
      display="flex"
      marginTop="150px"
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
            <Typography textAlign={"center"} variant="h4" color="#2796FD">
              <b>Register a New Account </b>
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
                      <Typography textAlign={"center"} variant="h6" color="#2796FD" >
                        Please enter the following details:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      
                        <CardContent>
                        {/*
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
                        */}
                          <Typography textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}}>
                            Email:
                            <br/> 
                          </Typography>
                          <TextField 
                            required
                            placeholder="johncitizen@example.com"
                            id="outlined-required"
                            onChange={(event) => {
                                setRegisterEmail(event.target.value)
                            }} 
                          />
                          <Typography textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}} required> 
                          <br/>
                            Password:
                            <br/>
                            
                            <TextField 
                              required
                              placeholder="At least 6 characters"
                              type="password"
                              id="outlined-required"
                              onChange={(event) => {
                                setRegisterPassword(event.target.value)
                              }} 
                            />
                          </Typography>
                          <br/>
                          <Typography as={Link} to="/account/login" style={{fontWeight: "bold"}} type="submit" required>
                            Already have an account? Click here to log in!
                          </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}
                        display="flex"
                        justifyContent="center"
                    >
                      <Button 
                        component={Link}
                        to="/"
                        variant="contained" 
                        style={{backgroundColor:"#2796FD"}} 
                        onClick={register}>
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

export default Register