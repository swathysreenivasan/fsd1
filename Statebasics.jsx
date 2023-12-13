import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var name="swathy"
    var [fname,setfname]=useState("swathy")
    const changename=()=>{
        console.log("clicked");
    }
  return (
    <div>
        <Typography>My name is {fname} </Typography>
        <Button variant="contained" onclick={changename}>Change</Button>
    </div>
  )
}

export default Statebasics