import React, { useState } from 'react';
import { isTime } from 'react-time-picker/dist/shared/propTypes';
import TimeToBegin from './TimeSet';
import DateTimePicker from 'react-datetime-picker';
import TimeToEnd from './TimeToEnd';
import { FaPlus , FaList , FaDollarSign } from 'react-icons/fa';
import { MdLabel } from 'react-icons/md';
import { useRef } from 'react';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimeSet from './TimeSet';



const FormForEnterTicket = ({ newTicket , newTimeStart , newTimeFinish , setNewTicket , setNewTimeStart , setNewTimeFinish ,  handleSubmit }) => {
 
  const inputRef = useRef();
  const [valueStart, setValueStart] = useState(new Date());
  const [valueFinish, setValueFinish] = useState(new Date());
  const timeChangeStart = (newValue) => {
    setValueStart(newValue);
    setNewTimeStart(newValue);
  };
  const timeChangeFinish = (newValue) => {
    setValueFinish(newValue);
    setNewTimeFinish(newValue);
  };
  const timeSetToday = () => {
    setValueStart(new Date());
    setValueFinish(new Date());
  };
 
  return (
    <form className='FormForEnterTicket' onSubmit={handleSubmit}>
      
        <input 
           /*  autoFocus */
            id='createTicket'
            ref={inputRef}
            type='ticket'
            placeholder='What have you done?'
            required
            value={newTicket}
            onChange={(e) => setNewTicket(e.target.value)}
        >
        </input>
        <button className='buttonProject'
           /*  className='btn'  */
            type='submit'
            aria-label='Create Project'
           /*  onClick={timeSetToday} */
            onClick={() => {
              if (!newTicket) { inputRef.current.focus() }
               else { timeSetToday();console.log('create project') }
              }  }
        >
               + Create a project
              
        </button>
        <MdLabel />
        <FaDollarSign/>
        <TimeSet
              value={valueStart}
              timeChange={timeChangeStart}
        />
        <TimeSet
              value={valueFinish}
              timeChange={timeChangeFinish}
        />
        <button 
              className='buttonCreateTicket'
              onClick={() => {
                if (!newTicket) { inputRef.current.focus() }
                 else { timeSetToday()}
                }  }
        >
        <FaPlus /> 
        </button>
       
    </form>
  )
}

export default FormForEnterTicket