import React from 'react'

const Card = ({children, bg= 'bg-blue-400' }) => {
  return (
    <div className= {`${bg} p-6 rounded-lg shadow-md`}> 
        {children}
      <p> Baneto </p>
    </div>   
  )
}

export default Card

