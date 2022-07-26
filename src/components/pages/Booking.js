import React, { useState } from 'react'
import { auth } from '../../firebase-config'
import '../../App.css'
import {Grid, Button, Box, Typography, Link, Card, CardContent} from '@mui/material'
import { Multiselect } from "multiselect-react-dropdown";
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from '../Login';
import AccountInfo from '../AccountInfo';
import Register from '../Register'



function Booking() {
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

                        <Typography  textAlign={"left"} color="#2796FD" style={{fontWeight: "bold",  fontSize: "22px"}} required 
                        >
                        <label for="Departing">Departing From:</label>
                        <br/>
                        <select name="Departing" id="Departing" style={{borderRadius: "5px", boxShadow: "0px 4px 10px", width: "380px", height: "55px",  fontSize: "24px", color: "#C2C2C2"}}>
                          
                          <option value="NZ">Auckland, New Zealand</option>
                          <option value="AA">Adelaide, Australia</option>
                          <option value="BA">Bribane, Australia</option>
                          <option value="DA">Darwin, Australia</option>
                          <option value="HA">Hobart, Australia</option>
                        </select>
                        </Typography>
                        <br/>

						            <Typography  textAlign={"left"} color="#2796FD" style={{fontWeight: "bold",  fontSize: "22px"}} required>
                        <label for="Arriving">Arriving At:</label>
                        <br/>
                        <select name="Arriving" id="Arriving" style={{borderRadius: "5px", boxShadow: "0px 4px 10px", width: "380px", height: "55px",  fontSize: "24px", color: "#C2C2C2"}}>
                          <option value="UAE">Abu Dhabi, United Arab Emirates</option>
                          <option value="AN">Amsterdam, Netherlands</option>
                          <option value="BI">Bali, Indonesia</option>
                          <option value="BS">Barcelona, Spain</option>
                          <option value="USA">California, United States</option>
                        </select>
                        </Typography>
                        <br/>
                       
                        <Typography  textAlign={"left"} color="#2796FD" style={{fontWeight: "bold",  fontSize: "22px"}} required>
                        <label for="Arriving">Plane Seat Select:</label>
                        <br/>
                        <select name="Arriving" id="Arriving" style={{borderRadius: "5px", boxShadow: "0px 4px 10px", width: "380px", height: "55px",  fontSize: "24px", color: "#C2C2C2"}}>
                        <optgroup label="A Row">
                          <option value="1a">1</option>
                          <option value="2a">2</option>
                          <option value="3a">3</option>
                          <option value="4a">4</option>
                          <option value="5a">5</option>
                          <option value="6a">6</option>
                          <option value="7a">7</option>
                          <option value="8a">8</option>
                          <option value="9a">9</option>
                          <option value="10a">10</option>
                          <option value="11a">11</option>
                          <option value="12a">12</option>
                          <option value="13a">13</option>
                          <option value="14a">14</option>
                          <option value="15a">15</option>
                          <option value="16a">16</option>
                          <option value="17a">17</option>
                          <option value="18a">18</option>
                          <option value="19a">19</option>
                          <option value="20a">20</option>
                          <option value="21a">21</option>
                          <option value="2a">22</option>
                          <option value="23a">23</option>
                          <option value="24a">24</option>
                          <option value="25a">25</option>
                          <option value="26a">26</option>
                          <option value="27a">27</option>
                          <option value="28a">28</option>
                          <option value="29a">29</option>
                          <option value="30a">30</option>
                        </optgroup>
                        <optgroup label="B Row">
                          <option value="1b">1</option>
                          <option value="2b">2</option>
                          <option value="3b">3</option>
                          <option value="4b">4</option>
                          <option value="5b">5</option>
                          <option value="6b">6</option>
                          <option value="7b">7</option>
                          <option value="8b">8</option>
                          <option value="9b">9</option>
                          <option value="10b">10</option>
                          <option value="11b">11</option>
                          <option value="12b">12</option>
                          <option value="13b">13</option>
                          <option value="14b">14</option>
                          <option value="15b">15</option>
                          <option value="16b">16</option>
                          <option value="17b">17</option>
                          <option value="18b">18</option>
                          <option value="19b">19</option>
                          <option value="20b">20</option>
                          <option value="21b">21</option>
                          <option value="22b">22</option>
                          <option value="23b">23</option>
                          <option value="24b">24</option>
                          <option value="25b">25</option>
                          <option value="26b">26</option>
                          <option value="27b">27</option>
                          <option value="28b">28</option>
                          <option value="29b">29</option>
                          <option value="30b">30</option>
                        </optgroup>
                        <optgroup label="C Row">
                          <option value="1c">1</option>
                          <option value="2c">2</option>
                          <option value="3c">3</option>
                          <option value="4c">4</option>
                          <option value="5c">5</option>
                          <option value="6c">6</option>
                          <option value="7c">7</option>
                          <option value="8c">8</option>
                          <option value="9c">9</option>
                          <option value="10c">10</option>
                          <option value="11c">11</option>
                          <option value="12c">12</option>
                          <option value="13c">13</option>
                          <option value="14c">14</option>
                          <option value="15c">15</option>
                          <option value="16c">16</option>
                          <option value="17c">17</option>
                          <option value="18c">18</option>
                          <option value="19c">19</option>
                          <option value="20c">20</option>
                          <option value="21c">21</option>
                          <option value="22c">22</option>
                          <option value="23c">23</option>
                          <option value="24c">24</option>
                          <option value="25c">25</option>
                          <option value="26c">26</option>
                          <option value="27c">27</option>
                          <option value="28c">28</option>
                          <option value="29c">29</option>
                          <option value="30c">30</option>
                        </optgroup>
                        <optgroup label="D Row">
                          <option value="1d">1</option>
                          <option value="2d">2</option>
                          <option value="3d">3</option>
                          <option value="4d">4</option>
                          <option value="5d">5</option>
                          <option value="6d">6</option>
                          <option value="7d">7</option>
                          <option value="8d">8</option>
                          <option value="9d">9</option>
                          <option value="10d">10</option>
                          <option value="11d">11</option>
                          <option value="12d">12</option>
                          <option value="13d">13</option>
                          <option value="14d">14</option>
                          <option value="15d">15</option>
                          <option value="16d">16</option>
                          <option value="17d">17</option>
                          <option value="18d">18</option>
                          <option value="19d">19</option>
                          <option value="20d">20</option>
                          <option value="21d">21</option>
                          <option value="22d">22</option>
                          <option value="23d">23</option>
                          <option value="24d">24</option>
                          <option value="25d">25</option>
                          <option value="26d">26</option>
                          <option value="27d">27</option>
                          <option value="28d">28</option>
                          <option value="29d">29</option>
                          <option value="30d">30</option>
                        </optgroup>
                        <optgroup label="E Row">
                          <option value="1e">1</option>
                          <option value="2e">2</option>
                          <option value="3e">3</option>
                          <option value="4e">4</option>
                          <option value="5e">5</option>
                          <option value="6e">6</option>
                          <option value="7e">7</option>
                          <option value="8e">8</option>
                          <option value="9e">9</option>
                          <option value="10e">10</option>
                          <option value="11e">11</option>
                          <option value="12e">12</option>
                          <option value="13e">13</option>
                          <option value="14e">14</option>
                          <option value="15e">15</option>
                          <option value="16e">16</option>
                          <option value="17e">17</option>
                          <option value="18e">18</option>
                          <option value="19e">19</option>
                          <option value="20e">20</option>
                          <option value="21e">21</option>
                          <option value="22e">22</option>
                          <option value="23e">23</option>
                          <option value="24e">24</option>
                          <option value="25e">25</option>
                          <option value="26e">26</option>
                          <option value="27e">27</option>
                          <option value="28e">28</option>
                          <option value="29e">29</option>
                          <option value="30e">30</option>
                        </optgroup>
                        <optgroup label="F Row">
                          <option value="1f">1</option>
                          <option value="2f">2</option>
                          <option value="3f">3</option>
                          <option value="4f">4</option>
                          <option value="5f">5</option>
                          <option value="6f">6</option>
                          <option value="7f">7</option>
                          <option value="8f">8</option>
                          <option value="9f">9</option>
                          <option value="10f">10</option>
                          <option value="11f">11</option>
                          <option value="12f">12</option>
                          <option value="13f">13</option>
                          <option value="14f">14</option>
                          <option value="15f">15</option>
                          <option value="16f">16</option>
                          <option value="17f">17</option>
                          <option value="18f">18</option>
                          <option value="19f">19</option>
                          <option value="20f">20</option>
                          <option value="21f">21</option>
                          <option value="22f">22</option>
                          <option value="23f">23</option>
                          <option value="24f">24</option>
                          <option value="25f">25</option>
                          <option value="26f">26</option>
                          <option value="27f">27</option>
                          <option value="28f">28</option>
                          <option value="29f">29</option>
                          <option value="30f">30</option>
                        </optgroup>
                        </select>
                        </Typography>
                        <br/>                       


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



export default Booking;
