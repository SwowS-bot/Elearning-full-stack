import axios from 'axios'
import React from 'react'

const Lectures = () => {
  return (
    axios.get('http://localhost:5000/api/user')
    .then(response => {
      console.log(response.data)
    })
    .catch(error =>{
      console.error(error)
    })
  )
}

export default Lectures