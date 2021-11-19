import '../Components/all.css';

import {useEffect} from 'react';

//header image
import navbarImage from '../Components/images/boxes.svg'

import { Link } from 'react-router-dom';
import video from './images/camera-reels.svg'

const Header = () => {
    let i = 1;

    useEffect(() => {
     
        document.getElementById('navbar').addEventListener('click',()=>{

            if(i===1){
                document.getElementById('navbar').style.transform = `rotate(${90}deg)`
                document.getElementById('navbar').style.transition = `all 1s ease`

                document.getElementById('header__image').style.display='block'            
                document.getElementById('header__links').style.display='block' 
                document.getElementById('header').style.height ='20vh '
                i=0;           
            }
            else{
                document.getElementById('navbar').style.transform = `rotate(${-90}deg)`
                document.getElementById('navbar').style.transition = `all 1s ease`
                
                document.getElementById('header__image').style.display='none'            
                document.getElementById('header__links').style.display='none'            
                document.getElementById('header').style.height ='15vh'
                i=1;
            }
        })

        
    }, [])
  


    return (
        <div id='header' className='header'>

            <img id='navbar' className='navbar__image' src={navbarImage} alt="" />

            <div id='header__image' className='header__image'>

                <Link to='/'><img src={video} alt="" /> Tv Shows</Link>
            </div>
            <div id='header__links' className='header__links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>

            </div>
        </div>
    )
}

export default Header;
