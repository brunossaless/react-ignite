import { differenceInSeconds } from "date-fns"
import React, { createContext, ReactNode, useState, useReducer, useEffect } from "react"
import { ActionTypes, addNewCycleAction, interruptCurrentCycleAction, markCurrentCycleAsFinishedAction } from "../reducers/cycles/actions"
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}


interface CyclesContextProviderProps {
  // qualquer html válido
  children: ReactNode;
}


export const CycleContext = createContext({} as CycleContextType)

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null
  }, () => {
    const storadStateAsJSON = localStorage.getItem('@ignite-timmer:cycles-state-1.0.0')

    if (storadStateAsJSON) {
      return JSON.parse(storadStateAsJSON)
    }
  }
  )
  // iniciando o state ^^

  const { cycles, activeCycleId } = cyclesState

  //retorna o id que está no activeCycle em cyles
  //JS é incrivel
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(
        new Date(),
        new Date(activeCycle.startDate)
      )
    }
    return  0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    //é bom colocar versão, para o caso de no futuro
    // eu começar a trabalhar com formato de dados diferentes no storage
    localStorage.setItem('@ignite-timmer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])


  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())

    // setCycles(state => state.map(cycle => {
    //     if (cycle.id === activeCycleId) {
    //         return { ...cycle, finishedDate: new Date() }
    //     } else {
    //         return cycle
    //     }
    // })
    // )
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id: id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountSecondsPassed(0)

  }

  // uncontrolled - só pega as informações depois de dar o submit

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction())


    // setCycles(state => state.map(cycle => {
    //   if (cycle.id === activeCycleId) {
    //     return { ...cycle, interruptedDate: new Date() }
    //   } else {
    //     return cycle
    //   }
    // })
    // )

  }


  return (
    <CycleContext.Provider value={{
      cycles,
      activeCycle,
      activeCycleId,
      markCurrentCycleAsFinished,
      amountSecondsPassed,
      setSecondsPassed,
      createNewCycle,
      interruptCurrentCycle
    }}>

      {children}
    </CycleContext.Provider>
  )
}