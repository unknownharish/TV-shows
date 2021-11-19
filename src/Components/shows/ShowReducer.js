
const showReducer = (state, action) => {

    switch (action.type) {

        case 'SearchShows': 
            return {
                ...state,
                'shows': action.payload
            }
       
        case 'setSingleShows':{
            return{
                ...state,
                'SingleShows':action.payload,
            }
        }

        case 'SetLoading':{
            return{
                ...state,
                'loading':action.payload,
            }
        }

        case 'setloadingGIF':{
            return{
                ...state,
                'loadingGIF':action.payload,
            }
        }
            
        default:{
            return state;
        }    
    }

}
export default showReducer;


