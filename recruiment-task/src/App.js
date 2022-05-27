import { format } from 'date-fns';
import { setDate } from 'date-fns/esm';
import { useState , useEffect } from 'react';
import './App.css';
import FormForEnterTicket from './FormForEnterTicket';
import HeaderOfProjects from './HeaderOfProjects';
import TableOfTicket from './TableOfTicket';
import TimeToBegin from './TimeSet';
import WeekProject from './WeekProject';
import TicketInfo from './TicketInfo';

function App() {
    const [tickets, setTickets] = 
    useState([
    /*   useState(JSON.parse(localStorage.getItem('ticketsList'))) */
        {
            id: 1,
            ticket: "First job",
            timeStart: new Date(),
            timeFinish: new Date(),
            timeCompleet: 10,
        },
        {
            id: 2,
            ticket: "Second job",
            timeStart: new Date(),
            timeFinish: new Date(),
            timeCompleet: 20,
        },
        {
            id: 3,
            ticket: "Third job",
            timeStart: new Date(),
            timeFinish: new Date(),
            timeCompleet: 30,
        }

    ])  
    const [ticket, setTicket] = useState ('')
    const [timeStart, setTimeStart] = useState (new Date())
    const [timeFinish, setTimeFinish] = useState (new Date())
    const [totalTime, setTotalTime] = useState (0);
 
/*     useEffect(() => {
        localStorage.setItem('ticketsList', JSON.stringify(tickets));
      }, [tickets])
 */
    timeStart.getTime();

    const setAndSaveTickets = (newTickets) => {
          setTickets(newTickets);
          localStorage.setItem('ticketsList', JSON.stringify(newTickets));
    }

    const addTicket = () => {
          const id = tickets.length ? tickets.length+1 : 1;
          const timeCompleet = timeFinish.getTime()-timeStart.getTime();
          setTotalTime(totalTime+timeCompleet)
          const myNewTicket = { id, ticket, timeStart, timeFinish, timeCompleet};
          const listOfTickets = [...tickets, myNewTicket];
          setAndSaveTickets(listOfTickets);
    }

    const handleSubmit = (e) => {

            e.preventDefault();
            console.log('handleSubmit');
           /*  if (!newTicket) return;*/
            addTicket();
            setTicket('');
            setTimeStart(new Date()); 
            setTimeFinish(new Date());
    }

    const [showInfo, setShowInfo] = useState(true);
    const [ticketNumber, setTicketNumber] = useState(0);

 
    return (
        <div className="App">
        <FormForEnterTicket 
              newTicket={ticket}
              newTimeStart={timeStart}
              newTimeFinish={timeFinish}
              setNewTicket={setTicket}
              setNewTimeStart={setTimeStart}
              setNewTimeFinish={setTimeFinish}
              handleSubmit={handleSubmit}
        />  
        <HeaderOfProjects/>
        <WeekProject/>
        <TableOfTicket
              tickets={tickets}
              totalTime={totalTime}
              setTickets={setTickets}
              showInfo={showInfo}
              setShowInfo={setShowInfo}
              ticketNumber={ticketNumber}
              setTicketNumber={setTicketNumber}
        />
        <TicketInfo
            showInfo={showInfo}
            setShowInfo={setShowInfo}
            ticketNumber={ticketNumber}
        />
          </div>
    );
  }

export default App
              