import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <Typography variant='h1'>Hello</Typography>
        <TextField variant='filled' label="username"/>
        <TextField variant='outlined' label="username"/>
        <TextField variant='standard' label="username"/>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
         <Button variant="outlined">Outlined</Button> 
    </div>
  )
}

export default Login
