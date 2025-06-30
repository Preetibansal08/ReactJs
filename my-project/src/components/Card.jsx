import { useState } from "react";
import "./button.css"

const h3_style = {
  backgroundColor:"white",
  fontSize:"35px"
}
const Card = ({title , rate , para}) =>{
    const[liked , hasLiked] = useState(false)
     return(
      <div className="card">
          <h1 style = {
            {
              color:"black",
              fontSize:50
            }
          }>{title}</h1>
          <h3 style={h3_style}> < span className={ rate >= "⭐⭐⭐⭐⭐" ? "good" : "bad" }> {rate} </span></h3>
          <p>{para}</p>
          <button onClick={()=> hasLiked(!liked)} className="btn">
            {liked ?  "❤️" : "🤍"}
          </button>
      </div>
     )
    }
 
   export default Card

   