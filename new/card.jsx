
import React from 'react'

const Card = ({data}) => {
  // console.log(data)
  // console.log(props);
  
  return (
    
    <div style={{display:"flex" , flexWrap:"wrap" , gap: 20 }}>
      {data.map(singleItem =>(
          <div key={singleItem.id}  style={{backgroundColor:"orange" , height:300 ,width:350 , border:"solid black 2px", borderRadius:10, padding:20}}>
           <img src={singleItem.thumbnail} alt="" style={{height:100 , width:100 , margin:10}}/>
           <h3>{singleItem.title}</h3>
           <p>{singleItem.price}</p>
           <p style={{opacity:0.8}}>{singleItem.description}</p>
          </div>
      ))}
    </div>
  )
}

export default Card