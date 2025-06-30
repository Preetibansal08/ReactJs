// import { useState } from "react";
 
//  const Card = ({title , rate}) =>{
//   const[liked , hasLiked] = useState(false)
//    return(
//     <div className="card">
//         <h1>{title}</h1>
//         <h3>{rate}</h3>
//         <button onClick={()=> hasLiked(!liked)}>
//           {liked ?  "❤️" : "🤍"}
//         </button>
//     </div>
//    )
//  }
 
import { useState } from "react"
import Card from "./components/Card"
import { EventHandling } from "./components/eventHandling"




 const App = ({card}) => {
  const[data , setData] = useState(0);
  const hasincreased = ()=>{
    setData((preVal) => preVal+1);
}
  const hasdecreased = ()=>{
    setData((preVal) => preVal-1);
}
   return (
    <div>
    <div className="card-container">
     {/* {
        card.map( (data) =>{
         return <Card  title={data.title} rate={data.rate}/>
        })
      
     } */}
     {/* {
        card.map( (data) =>(
          <Card  title={data.title} rate={data.rate}/>
        ))
     } */}
      {
        card.map( (data) => <Card key={data.id} title={data.title} para={data.para} rate={data.rate} /> )
     }
     
    {/* <Card title="Hello"/>
    <Card />
    <Card /> */}
 
 
    </div>

    <section>
      <EventHandling />
    </section>
    <section>
    
      <button onClick={hasincreased}>increase</button>
      {data}
      <button onClick={hasdecreased}>decrease</button>
    </section>
    </div>
   )
 }

 export default App