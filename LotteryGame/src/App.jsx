
import Lottery from './Lottery'
import "./App.css";
import TicketNum from './ticketNum';
import Ticket from './Ticket';

function App() {

  return (
    <div>
      <Lottery n={3} winningSum={15}/>
       
      {/* <TicketNum num = {5}/>
      <TicketNum num = {4}/>
      <TicketNum num = {3}/> */}

      {/* <Ticket ticket = {[0 , 1 ,2]}/> */}
     
    </div>
  )
}

export default App
