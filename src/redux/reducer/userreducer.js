import {LOADING_UI, SIGNUP_ERROR, SET_USER,LOGIN_SUCCESS,LOGIN_ERROR,SIGNUP_SUCCESS, IMAGE_ERROR, THEME_LINK, THEME_LINKOFF, RESET_LINK, RESET_LINKOFF} from '../type/type'
const initialState = {
  credentials:{},errors:{},loading:false,open:false,link:{open:false,data:"",color:""}
}

export default (state = initialState, action) => {
    switch (action.type) {

    case LOADING_UI:
        return { ...state,loading:true,errors:{},open:false,link:{open:false,data:"",color:""}}
    case SET_USER:
      
        return {
            credentials:action.payload,
            loading:false,
            errors:{},open:false,link:{open:false,data:"",color:""}
        }
    case SIGNUP_ERROR:
    
      return {
        ...state,
        loading:false,
        errors: {signup:action.err.message},open:false,link:{open:false,data:"",color:""}
      }
    case SIGNUP_SUCCESS:
 
      return {
        ...state,
        loading:false,open:false,link:{open:false,data:"",color:""},
        errors: {}}
    case LOGIN_ERROR:
  
      return {
        ...state,loading:false,
        errors: {login:action.err.message},open:false,link:{open:false,data:"",color:""}
      }

    case LOGIN_SUCCESS:

      return {
        ...state,
        loading:false,
        errors:{},open:false,link:{open:false,data:"",color:""}
      }

   
      case IMAGE_ERROR:
    
        return {
          ...state,
          loading:false,
          errors: {image:action.err.message},open:false,link:{open:false,data:"",color:""}
        }
      case SIGNUP_SUCCESS:
   
        return {
          ...state,
          loading:false,open:false,link:{open:false,data:"",color:""},
          errors: {}}
        case THEME_LINK:
          return{
            ...state,open:true
          }
          case THEME_LINKOFF:
            return{
              ...state,open:false
            }
            case RESET_LINK:
          return{
            ...state,link:{open:true,data:action.payload,color:action.color}
          }
          case RESET_LINKOFF:
            return{
              ...state,link:{open:false,data:""}
            }
    
    default:
        return state
    }
}
