import React, { useContext } from 'react'
import { Itemcontext } from '../Contexts/ItemsContext'



const Body = () => {
    const [items,setitems]=useContext(Itemcontext)
  
function handleremove(id){
const filter=items.filter((val)=>(
val.id!==id
))
setitems(filter)
}
function handlechange(e, id) {
    const num = Number(e.target.value);
    const filter = items.map((val) => (
        val.id===id?{...val,price:num*val.oprice}:val
    ));
    setitems(filter);
}


    return (
        <div>{items.map((val)=>(
    <div className='card' key={val.id}>
       <div className='img'><img src={val.thumbnail} alt="..." /></div>
       <div className='detials'><h1>{val.title}</h1><p>DiscountPercentage: {val.discountPercentage}</p><p>Rating: {val.rating}</p></div>
       <div className='last'>
       <div className='select'><select onChange={(e)=>handlechange(e,val.id)}><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select><span >${val.price}</span></div>   
       <div className='price'><h3 onClick={()=>handleremove(val.id)}>Remove</h3></div>    
    </div></div>))}
    </div>
  )
}

export default Body