import { Button, Select } from '@mui/material';
import React, { useState } from 'react';
import TicketInfo from './TicketInfo';
import * as ReactDOM from 'react-dom';
import {render} from 'react-dom'; 
/* import { useEffect } from 'react'; */
import ListGroup from 'react-bootstrap/ListGroup'

const TableOfTicket = ({ tickets , totalTime , setTickets , showInfo , setShowInfo , ticketNumber , setTicketNumber }) => {
    
/* const timeCompleet = 0; */
/* function sortTickets  (tickets) {
    tickets.sort((a, b) => a.timeStart > b.timeStart ? 1:-1);
} */

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    };

    const [view, setView] = useState(true);

    const setViewTicket = (select) => {
       /*  setView(false); */
       
       
        showInfo? setShowInfo(false):setShowInfo(true);
        console.log('click_showInfo',{showInfo});
        setTicketNumber(select);
        console.log('click_ID',{ticketNumber});
       /*  console.log('change_view',{view});
        view? setView(false):setView(true); */
    /*     ticket={ticket}
        view={view}
         */

   
    };

    const [item , setItem ] = useState(tickets);
    const [select, setSelect ] = useState(ticketNumber);

    function sortTikcets (tickets) {
       
        console.log('sort');
        tickets.sort((a, b) => a.timeStart > b.timeStart ? 1:-1);
      /*   setTickets(tickets);  */
        setItem(tickets);
        console.log(item);
        console.log(tickets);
       

    };

   
  
    function convertMsToHM(milliseconds) {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        seconds = seconds % 60;
        minutes = seconds >= 30 ? minutes + 1 : minutes;
        minutes = minutes % 60;
      /*   hours = hours % 24; */
        return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  };
  

    return (
        <div >
        <h3 className='TotalTime'>Today {convertMsToHM(totalTime)}
            <Button onClick={() => sortTikcets(tickets)}>
                sort
            </Button> 
               
                     
        </h3>
            {tickets.length ? 
            (
            <ul>
                {tickets.map((ticket) => (
                   
                    <li className="ticket" key={ticket.id}
                    value={ticket.id}
                    onChange={setSelect}
                    >
                        <div className='boxTicket'><h3>{ticket.ticket}</h3></div>
                        <div className='boxTimeInterval'>
                            <h3>
                            {ticket.timeStart.getHours()}:
                            {ticket.timeStart.getMinutes().toString().padStart(2, '0')}-
                            {ticket.timeFinish.getHours()}:
                            {ticket.timeFinish.getMinutes().toString().padStart(2, '0')}
                            {console.log('table')} 
                            </h3>
                        </div>
                        <div className='boxTime'
                        
                        onClick={() => setViewTicket(select)}
                        >
                            <h3>
                            {convertMsToHM(ticket.timeCompleet)}
                            </h3>
                        </div>
                       {/* <TicketInfo/> */}
                    </li>
                ))}
            </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
 
    </div>
  )
}

export default TableOfTicket