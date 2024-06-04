
import React, { useContext, useEffect } from 'react'
import { Itemcontext } from '../Contexts/ItemsContext'
const Total = () => {
    const [items]=useContext(Itemcontext)
    
  return (
    <div className="total"><h3>Total:
        </h3><h4>${items.reduce((acc,curr)=>acc+curr.price,0)}</h4></div>
  )
}

export default Total