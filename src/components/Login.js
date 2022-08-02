import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Box,
    Button, 
    Card, 
    CardContent, 
    Grid,
    Typography,
    TextField } from '@mui/material';

import { Link } from 'react-router-dom';

function Login() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const login = async () => {
    try {
      user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
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
        width={'30%'}
        >
        <Grid container>
          <Grid item xs={24} >
            <Typography textAlign={"center"} variant="h4" color="#2796FD">
              <b>Login </b>
            </Typography>
            <br /> <br />
            <br /> <br />
          </Grid>
          <Grid item xs={24}>
            <Card>
              <CardContent>
                <Grid container
                  spacing={2}>
                    <Grid item xs={24}>
                      <Typography textAlign={"center"} variant="h6" color="#2796FD" >
                        Please enter account details
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <CardContent>
                          <Typography  textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}}>
                            Email:
                            <br/> 
                            <TextField 
                              id="outlined"
                              onChange={(event) => {
                                setLoginEmail(event.target.value)
                              }} 
                            />
                          </Typography>
                          <Typography textAlign={"left"} color="#2796FD" style={{fontWeight: "bold"}}> 
                          <br/>
                            Password:
                            <br/>
                          </Typography>
                          <TextField 
                            type="password"
                            id="outlined"
                            onChange={(event) => {
                              setLoginPassword(event.target.value)
                            }} 
                          />
                          <br/>
                          <Typography as={Link} to="/account/register" style={{fontWeight: "bold"}}>
                            Don't have an account? Click here to create one!
                          </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12}
                        display="flex"
                        justifyContent="center"
                    >
                      <Button onClick={login} size="large" variant="contained" style={{backgroundColor:"#2796FD"}}>
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

export default Login