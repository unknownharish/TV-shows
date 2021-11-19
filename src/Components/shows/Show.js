import '../all.css';
import { useReducer } from 'react'
import axios from 'axios'
import ShowContext from './ShowContext';
import showReducer from './ShowReducer'


export default function Show(props) {


   

    const setloadingGIF = (bool) => {

        dispatch({
            type: 'setloadingGIF',
            payload: bool
        })

    }

    const setloading = (bool) => {

        dispatch(
            {
                type: 'SetLoading',
                payload: bool,
                
            }
        )

    }

    const setSingleShows = (id) => {
        dispatch({
            type: 'setSingleShows',
            payload: id
        })
    }

    const searchData = async (query) => {

        setloading(false);

        try {

            let { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);


            // console.log(data)

            dispatch({
                type: 'SearchShows',
                payload: data
            })
            setloadingGIF(false);


        } catch (error) {
            alert('check your network connection')

        }


    }

    const initialState = {
        'shows': [],
        'SingleShows': [],
        'loading': false,
        'loadingGIF': false,
        


    }

    const [state, dispatch] = useReducer(showReducer, initialState)


    return (
        <div>
            <ShowContext.Provider
                value={
                    {
                        shows: state.shows,
                        SingleShows: state.SingleShows,
                        loading: state.loading,
                        loadingGIF: state.loadingGIF,
                        searchData,
                        setSingleShows,
                        setloading,
                        setloadingGIF,
                    }
                }

            >

                {props.children}



            </ShowContext.Provider>
        </div>
    )
}
