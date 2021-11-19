import '../Components/all.css';
import ShowContext from './shows/ShowContext'


import { useState, useContext } from 'react';
import Show from './shows/Show';

export default function Search() {

    const [input, setinput] = useState('');
    const { searchData, shows, setloading, setloadingGIF } = useContext(ShowContext)

    const clickhandler = (e) => {
        e.preventDefault();

        if(input.length !== 0){
            searchData(input);
            setloadingGIF(true);

            

        }
        else{
            setloading(true);
            setTimeout(() => {
                
                setloading(false);
                
            }, 3000);
        }



          //  console.log(shows)
        
      
    }


    return (
        <form >
            <div className='search'>
                <input className='search__input' value={input} onChange={(e) => { setinput(e.target.value) }} type="text" name="text" id="" />
                <button className='search__button' onClick={(e) => clickhandler(e)} type="submit">Search</button>
            </div>
        </form>
    )
}
