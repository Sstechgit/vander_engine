import React from "react";

export default function InputField({
  type,
  name,
  placeholder,
  icon = null,
  error = null,
  iconClick=null,
  required=false,
  value,
  changeValue
}) {
    const OnChangeValue=(e)=>{
        changeValue(e.target.value)
    }
  return (
    <div className=" w-[80%]">
      <div className="flex gap-3 items-center text-base p-1 px-2 border-b-2 text-white h-fit group ">
        {icon && <i className={`${icon} group-hover:text-black group-focus-within:text-black `} onClick={()=>{if(iconClick){iconClick()}}}></i>}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={OnChangeValue}
          className=' h-8 placeholder:text-gray-200   font-["Poppins"]  bg-[#1ACA81] outline-none '
        />
      </div>
      <span className="w-full h-4 text-red-500  transition-all duration-300 text-md">{error?error:""}</span>
    </div>
  );
}
