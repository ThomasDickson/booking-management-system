import React from 'react'
import { auth } from '../firebase-config'

function AccountInfo() {
  return (
    <div>
      <br/><br />
      <h3>Signed in as: {auth.currentUser.email}</h3>
    </div>
  )
}

export default AccountInfo