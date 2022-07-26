import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { Box,
    Button, 
    Card, 
    CardContent, 
    Grid,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel } from '@mui/material'

function BookingSection() {
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
            <Typography variant="h4" color="#2796FD">
              <b>Fly with us. </b>
            </Typography>
            <Typography marginTop="12px" variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet lectus tincidunt, dapibus enim ut, egestas nunc.
              Pellentesque facilisis venenatis porta. Aliquam velit ex, dignissim quis nunc ac, semper ullamcorper leo. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Mauris laoreet lectus tincidunt, dapibus enim ut, egestas nunc. Pellentesque facilisis venenatis porta. 
              Aliquam velit ex, dignissim quis nunc ac, semper ullamcorper leo.
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
                          <InputLabel id="simple-select-label">Departing from</InputLabel>
                          <FormControl fullWidth>
                            <Select
                              labelId="simple-select-label">
                            </Select>
                          </FormControl>
                          
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

export default BookingSection