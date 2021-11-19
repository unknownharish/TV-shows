import React from 'react'
import user from '../images/randomuser.jpg';
import '../all.css';

// images
import book from '../images/book.svg'
import person from '../images/person-circle.svg';
import contact from '../images/contact (1).svg';
import tv from '../images/tv.svg';

export default function About() {

    return (
        <>
            <div className="about">

                <div className='about__user'>

                    <img className='user__img' src={user} alt="nothing to show" />
                    <img className='user__svg1' src={person} alt="" /><h3>Harish Vasisht</h3>
                    <img className='user__svg2' src={book} alt="" /> <h4 className='user__svg3__h3'>(currently MCA) </h4>
                    <div className='user__svg3'>

                        <img src={contact} alt="" />
                         <h4 className='user__svg3__h4'>samentrope@gmail.com </h4> 
                         
                    </div>



                    <h2>About the Developer</h2>

                </div>
                <div className='about__heading'>
                    <h2>Concepts used</h2>
                    <ol>
                        <li>

                            Hooks <ul>
                                <li>useState</li>
                                <li>useEffect</li>
                                <li>useContext</li>
                                <li>useReducer</li>
                            </ul>
                        </li>


                        <li>Routing

                            <ul>
                                <li>React-Router-Dom</li>
                                <li>Axios</li>
                            </ul>
                        </li>

                        <li>
                            Free Hands <ul>
                                <li>Vanilla Js </li>
                                <li>Css</li>
                            </ul>
                        </li>

                        <li>Api
                            <ul><li>Tv Maze Api</li></ul>
                        </li>
                    </ol>
                </div>

            </div>

        </>
    )
}
