import React from 'react'
import { Box } from '@mui/material'

function Destinations() {
  return (
    <Box
        marginTop="160px;"
        width={'100%'}
        height={'300px'} 
        sx={{ backgroundColor: '#fff'}}
    >
        <Grid item xs={6} >
          <Card >
            <CardMedia
              component="img"
              height="200"
              image="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/01/25/16/shutterstock-603577616.jpg?width=968"
              alt="kangaroo on australian beach"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Australia
              </Typography>
              <Typography variant="body1">
                Experience the gorgeous beaches of Australia.
              </Typography>
              <Typography color="#2796FD" variant="body2">
                <b>Flights from $129</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} >
          <Card>
            <CardMedia
              component="img"
              height="200"
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
        <Grid item xs={6} >
          <Card>
            <CardMedia
              component="img"
              height="200"
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
  )
}

export default Destinations