import { useState } from 'react'
import "./Lottery.css"
import { generateTicket , sum } from './helper'
import Ticket from './Ticket'



function Lottery({n, winningSum}) {
  const [tickets, setTickets] = useState(generateTicket(n));
  let isWining = sum(tickets) === winningSum;

  let buyTicket = () =>{
    setTickets(generateTicket(n));
  }


  return (
    <div>
      <h1>Lottery Game</h1>
      <div className='ticket'>
        {/* <span>{tickets[0]}</span>
        <span>{tickets[1]}</span>
        <span>{tickets[2]}</span> */}
        <Ticket ticket={tickets}/>
      </div>
      <button  className ="btn" onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWining && "congralutations , you won!"}</h3>
    </div>
  )
}

export default Lottery