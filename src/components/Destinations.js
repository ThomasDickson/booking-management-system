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
          <Grid item xs={12} >
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
                  New York subways, rats, pizza it has it all this life style could be all yours for the low price of $1247.
                </Typography>
                <br />
                <Typography color="#2796FD" variant="body1">
                  <b>Flights from $1247</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} >
            <Card>
              <CardMedia
                component="img"
                height="250"
                image="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/big-ben/big-ben-houses-of-parliament-shutterstock640x360jpg.jpg?h=360&w=640&la=en&hash=AE5224D40454F09CB83D0CE7E8DB02619EEB2AB7"
                alt="UK"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  London, England
                </Typography>
                <Typography variant="body1">
                  Go to England see the Big Ben maybe even have a sip of tea with a flight from FlyDreamAir!
                </Typography>
                <br />
                <Typography color="#2796FD" variant="body1">
                  <b>Flights from $954</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} >
            <Card>
              <CardMedia
                component="img"
                height="250"
                image="https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2019/03/Osaka-castle-cherry-blosson-iStock-512491222.jpg"
                alt="osaka"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Osaka, Japan
                </Typography>
                <Typography variant="body1">
                  Take in Japan's modern cities and culture. With a trip to Osaka flying FlyDreamAir.
                </Typography>
                <br />
                <Typography color="#2796FD" variant="body1">
                  <b>Flights from $1142</b>
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