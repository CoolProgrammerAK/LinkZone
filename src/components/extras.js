const isempty=string=>{
    if (string.trim()===""){
        return true
    }
    else{
        return false
    }
}
const isemail=string=>{
    const regex=/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/
    if (string.match(regex)){
        return true
    }
    else{
        return false
    }
}
const islink=string=>{
    const regex=/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
    if (string.match(regex)){
        return true
    }
    else{
        return false
    }
}
const islink2=string=>{
    const regex=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    if (string.match(regex)){
        return true
    }
    else{
        return false
    }
}
export const validatesign=data=>{
    let errors={}
    if(isempty(data.email)){
     errors.email="Email must not be empty"
    }
    else if(!isemail(data.email)){
      errors.email="Enter a valid email"
    }
    if (isempty(data.password)){
        errors.password="Enter password"
    }
    if (isempty(data.confirmpassword)){
        errors.confirmpassword="Please confirm the password"
    }
    else if(data.confirmpassword!==data.password){
       errors.confirmpassword2="Password must match"
    }
    if (isempty(data.userhandle)){
        errors.userhandle="Enter userhandle"
    }
   return {
        errors,
        valid:Object.keys(errors).length===0?true:false
    }
}
export const validatelogin=data=>{
    let errors={}
    if (data.email.trim()===""){
        errors.email="Enter email"
    }
    else if(!isemail(data.email)){
        errors.email="Enter a valid email"
      }
      if (data.password.trim()===""){
        errors.password="Enter password"
    
    

    }
    return {
        errors,
        valid:Object.keys(errors).length===0?true:false
    }
}

export const validatelink=data=>{
    let errors={}
    

    if (data.link.trim()===""){
        errors.link="Enter link"
    }
   else if(!islink(data.link)){
        errors.link="Enter a valid url"
      }
      if (data.title.trim()===""){
        errors.title="Enter title"
    }
    else if (data.title.length<4){
        errors.title="Title should be more than 4 characters"
    }
    return {
        errors,
        valid:Object.keys(errors).length===0?true:false
    }
}