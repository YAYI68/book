"use client"

import useTheme from '@/hooks/useTheme';
import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react'

type Props = {
    children:ReactNode
}
 

interface AppContextValueType {
    activeTheme:string|null;
    setActiveTheme:Dispatch<SetStateAction<string | null>> 
}

const AppContextValue:AppContextValueType = {
    activeTheme:"", 
    setActiveTheme:()=>{}
}





const AppContext = createContext<AppContextValueType | null>(AppContextValue)

const AppProvider = (props: Props) => {
     const {activeTheme,setActiveTheme}  = useTheme()
    const [ loading, setLoading] = useState(true)
     
   

     useEffect(()=>{
        setLoading(false)
     },[])


     const value = {
        activeTheme,
        setActiveTheme
    }

  return (
    <AppContext.Provider value={value}>
         {loading ? <h1>Loading.....</h1>:  props.children }
    </AppContext.Provider>
  )
}

export default AppProvider

export const useAppContext = ()=>{
    const context = useContext(AppContext)
    if (context == undefined) {
      throw new Error('useAppContext must be within a App provider')
    }
    return context

}