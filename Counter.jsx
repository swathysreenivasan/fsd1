import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const CounterApp = () => {
  var [count,setCount]=useState(0)
  const adds=()=>{
    if(count>=0){
      setCount(count+1)
    }
    
  }
  const minus=()=>{
    if(count>0){
    setCount(count-1)
    }
  }
  return (
    <div>
      <Button variant='contained' onClick={adds}>+</Button>&nbsp;&nbsp;
      <Typography>Count:{count}</Typography>&nbsp;&nbsp;
      <Button variant='contained' color='error' onClick={minus}>-</Button>
      </div>
  )
}

export default CounterApp