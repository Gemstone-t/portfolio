import React from 'react'
import { useEffect, useState } from 'react'
import './Footer.scss'

const Footer = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://api.countapi.xyz/update/aarti/rathi/?amount=1')
      .then(res => res.json())
      .then(resJson => {
        const data = JSON.parse(resJson.value)
        setItems(data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  return (
    <div className='footer text-center'>
      <p>Thank you for your attension</p>
      <p className='pink-text-gradient'>No. of Visitors | {1327}</p>
    </div>
  )
}

export default Footer
