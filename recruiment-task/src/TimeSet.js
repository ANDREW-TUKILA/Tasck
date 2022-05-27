/* 
import TimePicker from "rc-time-picker"; */
/* import 'rc-time-picker/assets/index.css'; */
 import TimePicker from '@mui/lab/TimePicker'; 
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import React, { useState } from 'react';


const TimeSet = ({ value , timeChange }) => {
   
  

    return (
                
            <div className='timeBox'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
                value={value}
                onChange={timeChange}
                renderInput={(params) => <TextField 
                size='small'
                variant	= 'outlined'
                {...params} />}
            />
            </LocalizationProvider> 
            </div>


    )
}

export default TimeSet