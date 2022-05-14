import React from 'react'
import { Box, 
         Card, 
         CardContent, 
         CardMedia,
         Grid,
         Typography } from '@mui/material'

function Destinations() {
  return (
    <Box
      component="div"
      display="flex"
      marginTop="160px"
      justifyContent="center"
      backgroundColor="#fff"
      >
      <Box
        marginTop="30px"
        display="flex"
        justifyContent="center"
        width={'60%'}
        >
        <Grid container 
          spacing={4}
        >
          <Grid item xs={12}>
            <Typography variant="h4" color="#2796FD">
              <b>Choose your adventure. </b>
            </Typography>
            <Typography marginTop="12px" variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet lectus tincidunt, dapibus enim ut, egestas nunc. Pellentesque facilisis venenatis porta. Aliquam velit ex, dignissim quis nunc ac, semper ullamcorper leo.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Card >
              <CardMedia
                component="img"
                height="250"
                image="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/01/25/16/shutterstock-603577616.jpg?width=968"
                alt="kangaroo on australian beach"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Queensland, Australia
                </Typography>
                <Typography variant="body1">
                  Bathe in the Australian sun on the gorgeous beaches of Surfers Paradise or enjoy the high-adrenaline thrills of Warner Brothers' Movie World.
                </Typography>
                <br />
                <Typography color="#2796FD" variant="body1">
                  <b>Flights from $129</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} >
            <Card>
              <CardMedia
                component="img"
                height="250"
                image="https://imageio.forbes.com/specials-images/dam/imageserve/1139828965/960x0.jpg?fit=bounds&format=jpg&width=960"
                alt="Bo Kaap neighborhood in Cape Town, South Africa"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cape Town, South Africa
                </Typography>
                <Typography variant="body1">
                  Explore Cape Town's vibrantly colourful neighborhoods and turquoise waters. Embark on an cultural and culinary adventure of Cape Town's endless beauty.
                </Typography>
                <br />
                <Typography color="#2796FD" variant="body1">
                  <b>Flights from $689</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} >
            <Card>
              <CardMedia
                component="img"
                height="250"
                image="https://purewows3.imgix.net/images/articles/2016_03/NY_Street_List5.jpg?auto=format,compress&cs=strip"
                alt="new york city street"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  New York, U.S.A
                </Typography>
                <Typography variant="body1">
                  Borger
                </Typography>
                <Typography color="#2796FD" variant="body2">
                  <b>Flights from $689</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} >
            <Card>
              <CardMedia
                component="img"
                height="250"
                image="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/4/24/1366809152661/Will.i.am-007.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f076a32937ada9d7c39efdf9296a56b4"
                alt="kangaroo on australian beach"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  America
                </Typography>
                <Typography variant="body1">
                  Borger
                </Typography>
                <Typography color="#2796FD" variant="body2">
                  <b>Flights from $689</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} >
            <Card>
              <CardMedia
                component="img"
                height="250"
                image="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/4/24/1366809152661/Will.i.am-007.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f076a32937ada9d7c39efdf9296a56b4"
                alt="kangaroo on australian beach"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  America
                </Typography>
                <Typography variant="body1">
                  Borger
                </Typography>
                <Typography color="#2796FD" variant="body2">
                  <b>Flights from $689</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Destinations