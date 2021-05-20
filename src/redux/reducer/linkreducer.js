import { LOADING_DATA, SET_LINK, LINK_ERROR ,CLEAR_ERROR,UPDATE_DATA,UPDATE_ERROR, } from "../type/type"

const initialState = {
loadingdata:false,
links:[],
errors:{}
}

export default (state = initialState, action) => {
    switch (action.type) {

    case LOADING_DATA:
        return {...state,loadingdata:true,errors:{}}
    case SET_LINK:
        return {
            loadingdata:false,
            links:[...state.links,{...action.payload,uid:action.uid}],
            errors:{}
        }
    case LINK_ERROR:
        return {
            ...state,
            loadingdata:false,
            errors: {linkerror:action.err.message},
           
        }
    case CLEAR_ERROR:
        return {
          ...state,errors:{},loadingdata:false
        }
   
      

        case UPDATE_DATA:
            return {
                loadingdata:false,
            links:[...state.links,{...action.payload,uid:action.uid}],
            errors:{}
            }
            case UPDATE_ERROR:
                return {
                  
                        ...state,loadingdata:false,
                        errors: {update:action.err.message}
                      
                }
    default:
        return state
    }
}
