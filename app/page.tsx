"use client"
import { useStore } from "zustand"
import {useCounterStore} from "./store"


export default function Counter() {
  
 const count =  useCounterStore((state)=>state.count)

 const increment =  useCounterStore((state)=>state.increase)
  
 const decrease =  useCounterStore((state)=>state.decrease)
  
  return (
    <div className="w=[95%] m-auto flex flex-row justify-around">
      
      <button onClick={increment}>one up</button>
      <h1>{count}</h1>
      <button onClick={decrease}>one down</button>
    </div>
  )
}