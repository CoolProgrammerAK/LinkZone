import {LOADING_UI, SIGNUP_ERROR, SET_USER,LOGIN_SUCCESS,LOGIN_ERROR,SIGNUP_SUCCESS, IMAGE_ERROR, THEME_LOADER, THEME_UPDATE, RESET_LOADER, RESET_UPDATE,} from '../type/type'
const initialState = {
  credentials:{},errors:{},loading:false,theme_loader:false,reset_loader:false
}

export default (state = initialState, action) => {
    switch (action.type) {

    case LOADING_UI:
        return { ...state,loading:true,errors:{}}
    case SET_USER:
      
        return {
          ...state,
            credentials:action.payload,
            loading:false,
            errors:{}
        }
    case SIGNUP_ERROR:
    
      return {
        ...state,
        loading:false,
        errors: {signup:action.err.message}
      }
    case SIGNUP_SUCCESS:
 
      return {
        ...state,
        loading:false,
        errors: {}}
    case LOGIN_ERROR:
      return {
        ...state,loading:false,
        errors: {login:action.err.message},
      }

    case LOGIN_SUCCESS:

      return {
        ...state,
        loading:false,
        errors:{}
      }

   
      case IMAGE_ERROR:
    
        return {
          ...state,
          loading:false,
          errors: {image:action.err.message},
        }
      case SIGNUP_SUCCESS:
   
        return {
          ...state,
          loading:false,
          errors: {}}
         
      case THEME_LOADER:
         return {
           ...state,theme_loader:true
         }
        case THEME_UPDATE:
          return {
            ...state,theme_loader:false
          }
              
      case RESET_LOADER:
        return {
          ...state,reset_loader:true
        }
       case RESET_UPDATE:
         return {
           ...state,reset_loader:false
         }
    
    default:
        return state
    }
}
