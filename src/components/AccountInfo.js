import React from 'react'
import { auth } from '../firebase-config'
import { Button } from '@mui/material'

function AccountInfo() {
  return (
    <div>
      <br/><br />
      <h3>Signed in as: {auth.currentUser.email}</h3>
      <Button>Log Out</Button>
    </div>
  )
}

export default AccountInfo