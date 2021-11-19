import '../Components/all.css'

//useContext
import showContext from '../Components/shows/ShowContext';

import {useContext} from 'react';
import {Link} from 'react-router-dom';
import notFound from '../Components/images/notFound.jpg';
import speak from '../Components/images/megaphone.svg'

export default function DisplayShows({showName}) {


   const showlink = `show/${showName.id}`
    return (
        <div className='displayShows'>
            
          <Link to={showlink} >
            <img src={showName.image?showName.image.medium:notFound} alt={notFound} />
          </Link>

           <div className="displayShows__data">
 
            <Link to={showlink}>    
            <h4 className='data__h4'>{showName.name}</h4>
            <p> <img src={speak} alt="" /> <b>{showName.language} </b></p>
            </Link>
          
           </div>
        </div>
    )
}
