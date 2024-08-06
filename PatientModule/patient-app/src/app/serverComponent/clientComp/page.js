"use client"
import React from 'react'
import { useState } from 'react'


const page = () => {
    const [hcolor , setColor] = useState({backgroundColor:"red"})
  return (
    <div>page
        <h1 style={hcolor}>HI H1</h1>
        <button onClick={()=>{setColor({backgroundColor:'green'})}}>update stylef </button>
    </div>
  )
}

export default page