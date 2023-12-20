import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contacts = () => {
    const navigate = useNavigate()
  return (
    <div className='route-pg' style={{flexDirection:'column'}}>
        <h1>This is contact page</h1>
        <button onClick={()=>navigate('/')} style={{backgroundColor:'blue',color:'white', padding:'1rem',border:'none',borderRadius:'2rem',margin:'1rem'}} >Go back to Home Page</button>
      
    </div>
  )
}

export default Contacts
