import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <Typography variant='h4' >signup</Typography><br></br>
        <TextField variant='outlined' label="name" /><br></br>
        <TextField variant='outlined' label="place" /><br></br>
        <TextField variant='outlined' label="age" /><br></br>
        <TextField variant='outlined' label="gender" /><br></br>
        <TextField variant='outlined' label="Email" /><br></br>
        <TextField variant='outlined' label="password" type="password" /><br></br>
        <Button variant='contained'>submit</Button>
            </div>
  )
}

export default Signup