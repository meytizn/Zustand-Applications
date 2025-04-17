"use client"
import { useStore } from "zustand"
import {useCounterStore} from "./store"
import Multilanguage from "./components/Multilanguage"


export default function Counter() {
  
 const count =  useCounterStore((state)=>state.count)

 const increment =  useCounterStore((state)=>state.increase)
 const decrease =  useCounterStore((state)=>state.decrease)
 

 const countasync =  useCounterStore((state)=>state.countasync)
 const increaseAsync =  useCounterStore((state)=>state.increaseAsync)
 


  return (

<>










<div className="flex flex-row w-[100%] justify-around  m-auto gap-y-2 my-5 flex-wrap  ">



<div className="flex flex-col w-[45%] md:w-[30%] text-center bg-red-600 border-md h-[300px]  justify-center content-around items-center  rounded-md">
  <div className="text-[20px] w-[100%] p-3 text-white">Counter </div>
  <div className="flex felx-col justify-center items-center  w-[100%]  h-[200px] text-center bg-white text-[30px]">{count}</div>
  <div className="text-[35px] w-[100%] p-3 flex flex-row justify-around text-white"><div><button onClick={increment}>+</button></div> <div>  <button onClick={decrease}>-</button></div></div>
  </div>






  <div className="flex flex-col w-[45%] md:w-[30%] text-center bg-red-600 border-md h-[300px]  justify-center content-around items-center  rounded-md">
  <div className="text-[20px] w-[100%] p-3 text-white">Async Counter </div>
  <div className="flex felx-col justify-center items-center  w-[100%]  h-[200px] text-center bg-white text-[30px]">{countasync}</div>
  <div className="text-[35px] w-[100%] p-3 flex flex-row justify-around text-white"><button onClick={increaseAsync}>+</button></div>
  </div>







<Multilanguage/>




</div>









<br/>
      

</>
)
}