//context global

import ShowContext from '../shows/ShowContext';


import React from 'react'
import {useContext} from 'react';

//image
import info from '../images/exclamation-square.svg';

export default function Alert() {
     const {loading ,message} = useContext(ShowContext)
    return (
        <>
        { loading?(
        <div className='Alerts'>
         <img src={info} alt="" /> 
         <p>The search field is empty..</p>
        </div>):''
        }
        </>
    )
}
