import { createContext, ReactNode} from "react"
import { CoffeType } from "../Data/CoffesDataArray"
import {coffes} from '../Data/CoffesDataArray'

interface CoffesContextType {
    coffes: CoffeType[] 
}

interface CoffesContextProviderProps {
    children: ReactNode
}

//context
export const CoffeContext = createContext({} as CoffesContextType)

export function CoffesContextProvider({children}:CoffesContextProviderProps){

    return (
        <CoffeContext.Provider value={{
            coffes,
        }}>
            
            {children}
        </CoffeContext.Provider>
    )
}