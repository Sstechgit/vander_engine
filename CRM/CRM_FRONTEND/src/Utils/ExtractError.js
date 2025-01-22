export function getErrors(result,fields){
    let msg=result.message;
    let payload=result.payload
    let errors={}
  
    if(msg=="ClientSide"){
    

        fields.forEach(name => {
          
            
            if(payload.hasOwnProperty(name)){
        
                errors[name]=payload[name].msg
            }
        });
     
    }
    else if(msg=="NoUnique" || msg=="NoEmail"){
        errors["email"]=payload
    }
    else if(msg=="AdminPresent" || msg=="WrongDesignation"){
        errors["designation"]=payload
    }
    else if(msg=="WrongPassword"){
        errors["password"]=payload
        
    }
    else{
        errors["system"]="Server is Down. Please Try Later"
        errors["msg"]=msg
    }
    return errors
}