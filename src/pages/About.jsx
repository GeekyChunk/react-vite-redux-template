import React, { useEffect } from 'react'
import axios from 'axios'

export default function About() {
  useEffect(() => {
    axios.get("users/GeekyChunk")
    .then(res => console.log(res))
  }, []);
  

  return (
      <>
        <h1> About </h1>
      </>
  )
}
