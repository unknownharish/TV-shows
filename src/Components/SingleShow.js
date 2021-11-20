import axios from 'axios';
import { useEffect, useState } from 'react';
import noimage from '../Components/images/notFound.jpg';
import watch from '../Components/images/stopwatch.svg';
import mike from '../Components/images/mic-fill.svg';
import speaker from '../Components/images/megaphone.svg';
import checklist from '../Components/images/card-checklist.svg';
import copy from '../Components/images/text-paragraph.svg';
import { Link } from 'react-router-dom';


const SingleShow = () => {

    const [data, setdata] = useState('');
    useEffect(async () => {

        const id = window.location.href.split('/')[4];
        const info = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setdata(info)
        console.log(info)

    }, [])

    const getGenre = (e) => {
        return (<span className='SingleShow__genres'>{e}</span>)
    }

    const getActualSummary = (summary) => {
    //   console.log(summary.replace(/(<\/?[bp]>)/g,''))

        return summary.replace(/(<\/?[bpi]>)/g,'')
    }

    return (
        <>



            {data ? (<> <div className='SingleShow'>
                {
                    data.data.image ?
                        <img src={data.data.image.medium} alt={noimage} /> :
                        <img src={noimage} alt={noimage} />

                }

                <div className='SingleShow__data'>

                    {/* <p className='SingleShow__genres'>{data.data.genres.map(e => getGenre(e))}</p> */}
                  <p style={{display:'flex'}}> {data.data.genres.map(e => getGenre(e))} </p> 
                    <p className='SingleShow__name'>{data.data.name}</p>
                    <p className='SingleShow__type'><img src={speaker} alt="" />{data.data.type}</p>
                    <p className='SingleShow__data__lang'><img src={mike} alt="" />{data.data.language}</p>
                    <p><img src={watch} alt="" />{data.data.runtime ? data.data.runtime + 'min' : 'not available'} </p>
                    <Link className='SingleShow__data__url' to={data.data.url}><h4><img src={copy} alt="" />{data.data.url}</h4></Link>

                    {data.data.rating.average && <p><img src={checklist} alt="" />{data.data.rating.average}</p>}
                </div>

                {/* <p className='SingleShow__info'>{data.data.summary}</p> */}
            </div>
                <div className='SingleShow__summary'>
                    <h3>Brief---</h3>
                    {data.data.summary ?
                        <p>{getActualSummary(data.data.summary)}</p> :
                        <p>No information is available...</p>

                    }
                </div>
            </>
            )
                : ''}
        </>
    )
}

export default SingleShow;

