import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UsaE = () => {
    var[name,setname]= useState()
     const changename=()=>{
        setname("name")
     }
     const changecname=()=>{
        setname("contact")

     }
     const changeGname=()=>{
        setname("Gallery")
     }
     

      return (
    <div>
        <Typography>Welcome to {name}</Typography>
        <Button variant='contained' onClick={changename}>name</Button>
        <Button variant='contained' onClick={changecname}>contact</Button>
        <Button variant='contained' onClick={changeGname}>Gallery</Button>
    </div>
  )
}

export default UsaE