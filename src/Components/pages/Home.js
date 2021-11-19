import React from 'react'



//gif loading
import loading from '../images/loading.gif'
//not found
import oops from '../images/not_found.jpg';

import showContext from '../shows/ShowContext';

//component
import Search from '../Search';
import { useContext } from 'react'
import DisplayShows from '../DisplayShows';







export default function Home() {

    const { shows, loadingGIF } = useContext(showContext);
    console.log(shows.length);


    return (
        <div>
            <Search />
            {
                loadingGIF ? <img className ='Home__loading' src={loading} alt="" /> :
                    
                    <div className='showDisplay'>

                        {
                            
                       shows.lenght===0? 
                        
                       <img className='Home__oops' src={oops} alt="" />:
                        shows.map(e => { return <DisplayShows showName={e.show} /> })
                        
                        }

                    </div>

            }


        </div>
    )
}
