import { urls } from "../../links"
import { DoFetch } from "./DoFetch"

export const handleCheckEmail=async(recordId)=>{
  

    let url=urls.checkMail
      const extHeader={
        "record":recordId
      }
      const result=await DoFetch(url,"GET",null,extHeader)
      return result
      
}