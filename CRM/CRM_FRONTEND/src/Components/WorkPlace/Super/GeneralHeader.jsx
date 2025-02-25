import { Button } from 'antd';
import React from 'react'



export default function GeneralHeader({operations}) {

  return (
    <div className="h-full flex gap-2">
        {Object.keys(operations).map((key,idx)=>{
            const {name,func,parameters,danger,type}=operations[key];
            return <Button key={idx} onClick={()=>{func(...parameters)}} danger={danger} type={type||"default"}>{name}</Button>
        })}
    </div>
  )
}
