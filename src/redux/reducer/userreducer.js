import {LOADING_UI, SIGNUP_ERROR, SET_USER,LOGIN_SUCCESS,LOGIN_ERROR,SIGNUP_SUCCESS, IMAGE_ERROR, THEME_LINK, THEME_LINKOFF} from '../type/type'
const initialState = {
  credentials:{},errors:{},loading:false,open:false
}

export default (state = initialState, action) => {
    switch (action.type) {

    case LOADING_UI:
        return { ...state,loading:true,errors:{},open:false}
    case SET_USER:
      
        return {
            credentials:action.payload,
            loading:false,
            errors:{},open:false
        }
    case SIGNUP_ERROR:
    
      return {
        ...state,
        loading:false,
        errors: {signup:action.err.message},open:false
      }
    case SIGNUP_SUCCESS:
 
      return {
        ...state,
        loading:false,open:false,
        errors: {}}
    case LOGIN_ERROR:
  
      return {
        ...state,loading:false,
        errors: {login:action.err.message},open:false
      }

    case LOGIN_SUCCESS:

      return {
        ...state,
        loading:false,
        errors:{},open:false
      }

   
      case IMAGE_ERROR:
    
        return {
          ...state,
          loading:false,
          errors: {image:action.err.message},open:false
        }
      case SIGNUP_SUCCESS:
   
        return {
          ...state,
          loading:false,open:false,
          errors: {}}
        case THEME_LINK:
          return{
            ...state,open:true
          }
          case THEME_LINKOFF:
            return{
              ...state,open:false
            }
    
    default:
        return state
    }
}
