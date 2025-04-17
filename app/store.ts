
import { create } from 'zustand'

type CounterStore = {
    count:number
    increase:()=>void;
    decrease:()=>void;
    
    countasync:number
    increaseAsync:()=>Promise<void>;
}




export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  countasync: 0 ,

  increase: () => {
    set((state) => ({ count: state.count + 1 }))
  },

  decrease: () => {
    set((state) => ({ count: state.count -1 }))
  },



  increaseAsync: async () => {
    await new Promise ((resolve)=>(setTimeout(resolve,1000)));
    set((state) => ({ countasync: state.countasync +1 }))
  },

}))










// Multi Language app store

type LanguageType={
    en:boolean
    enfunc:()=>void
}


export const useLanguageStore = create<LanguageType>((set) => ({
    en: true,
  
    enfunc: () => set((state) => ({ en: !state.en })),
    
  }))
  