import { LOADING_DATA, SET_LINK, LINK_ERROR ,CLEAR_ERROR, OPEN_ALERT, HIDE_ALERT, DELETEHIDE_ALERT,DELETE_ALERT,UPDATE_DATA,UPDATE_ERROR, UPDATE_ALERT, UPDATEHIDE_ALERT} from "../type/type"

const initialState = {
loadingdata:false,
links:[],
errors:{},
open:false,
open_del:false,open_up:false
}

export default (state = initialState, action) => {
    switch (action.type) {

    case LOADING_DATA:
        return {...state,loadingdata:true,errors:{},
    open:false,open_del:false,open_up:false}
    case SET_LINK:
        return {
            loadingdata:false,
            links:[...state.links,{...action.payload,uid:action.uid}],
            errors:{},
            open:false,open_del:false,open_up:false
        }
    case LINK_ERROR:
        return {
            ...state,
            loadingdata:false,
            errors: {linkerror:action.err.message},
            open:false,open_del:false,open_up:false
        }
    case CLEAR_ERROR:
        return {
          ...state,errors:{},loadingdata:false,open:false,open_del:false,open_up:false
        }
    case OPEN_ALERT:
        return{
            ...state,open:true,open_del:false,open_up:false
        }
    case HIDE_ALERT:
        return{
            ...state,open:false,open_del:false,open_up:false
        }
        case DELETE_ALERT:
            return{
                ...state,open:false,open_del:true,open_up:false
            }
        case DELETEHIDE_ALERT:
            return{
                ...state,open:false,open_del:false,open_up:false
            }
            case UPDATE_ALERT:
                return{
                    ...state,open:false,open_del:false,open_up:true
                }
            case UPDATEHIDE_ALERT:
                return{
                    ...state,open:false,open_del:false,open_up:false
                }

        case UPDATE_DATA:
            return {
                loadingdata:false,
            links:[...state.links,{...action.payload,uid:action.uid}],
            errors:{},
            open:false,open_del:false,open_up:false
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
