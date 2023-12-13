import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics2= () => {
    // var name="swathy"
    var [fname,setfname]=useState("swathy")
    var[val,setval]=useState()
    const changename=()=>{
        console.log("clicked");
        setfname(val)
        setval("")
    }
    const inputHandler=(e)=>{
        console.log(e.target.value)
        setval(e.target.value)
        
    }
    
  return (
    <div>
      
        <Typography>My name is {fname} </Typography>
        <TextField  varient="outlined" input="Enter Name" onChange={inputHandler} value={val}></TextField><br></br>
        <Button variant="contained"  onclick={changename}>Change</Button>
    </div>
  )
}

export default Statebasics2