import React from 'react'
import { Stack } from '@mui/material'
import Video from '../Video'
import Destinations from '../Destinations'

function Home() {
  return (
    <Stack
      direction="column" >
      <Video />
      <Destinations />
    </Stack> 
  )
}

export default Home