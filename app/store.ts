
import { create } from 'zustand'

type CounterStore = {
    count:number
    increase:()=>void
    decrease:()=>void
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 1,

  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count -1 })),

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
  