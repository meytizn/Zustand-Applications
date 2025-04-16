"use client"
import React from 'react'
import { useLanguageStore } from '../store'

 
export default function Multilanguage() {
    
const en =  useLanguageStore((state)=>state.en)
const enfunc =  useLanguageStore((state)=>state.enfunc)

  return (
    <>
    <div className="flex flex-col w-[45%] md:w-[30%] text-center bg-red-600 border-md h-[300px]  justify-center content-around items-center  rounded-md">
  <div className="text-[20px] w-[100%] p-3 text-white">Multi Language  </div>
  <div className="flex felx-col justify-center items-center  w-[100%]  h-[200px] text-center bg-white text-[30px]">{en?"dualingual language " : "دو زبانه"}</div>
  <div className="text-[28px] w-[100%] p-3 flex flex-row justify-around text-white"><button onClick={enfunc}>{en?"English " : "فارسی"}</button></div>
  </div>
    
    </>
  )
}
