//npm i immer
import { produce } from 'immer'

import { ActionTypes } from "./actions"

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {

  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      // return {
      //   // aqui é o 'set' ele retorna todos os valores do state que tinha antes e pega o valor de cycles e altera, colocando um no final
      //   ...state,
      //   cycles: [...state.cycles, action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.id
      // }
      // ======== FAZENDO COM O IMMER =========
      //dessa forma não infere a imutabilidade
      return produce(state, draft => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map(cycle => {
      //     if (cycle.id === state.activeCycleId) {
      //       return { ...cycle, interruptedDate: new Date() }
      //     } else {
      //       return cycle
      //     }
      //   }),
      //   activeCycleId: null,  
      // }

      const currentCycleIndex = state.cycles.findIndex(cycle => {
        return cycle.id === state.activeCycleId
      })
      //^^^^ se não encontrar nenhum item ele retorna -1

      if (currentCycleIndex < 0) {
        return state
      }
      // ======== FAZENDO COM O IMMER =========
      return produce(state, draft => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map( cycle => {
      //     if (cycle.id === state.activeCycleId){
      //       return {...cycle, finishedDate: new Date()}
      //     }
      //     else {
      //       return cycle
      //     }
      //   })
      // }

      const currentCycleIndex = state.cycles.findIndex(cycle => {
        return cycle.id === state.activeCycleId
      })
      //^^^^ se não encontrar nenhum item ele retorna -1

      if (currentCycleIndex < 0) {
        return state
      }
      // ======== FAZENDO COM O IMMER =========
      return produce(state, draft => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    default:
      return state;
  }
}