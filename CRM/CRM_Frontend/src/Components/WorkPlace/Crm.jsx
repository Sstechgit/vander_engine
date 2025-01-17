import React from 'react'
import Menu from './Menu'
import Result from './Result'


export default function Crm({setload}) {
  return (
    <div className="w-screen h-screen flex">
      <Menu/>
      <Result setload={setload}/>
    </div>
  ) 
}


