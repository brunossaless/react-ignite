import { differenceInSeconds } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { CycleContext } from "../../../../contexts/CycleContetx";
import { CountdownContainer } from "./styles";
import { Separator } from "./styles";

export function Countdown(){
  const {activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed} = useContext(CycleContext)


  
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        )
        
        if (secondsDifference >= totalSeconds){
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }  
      }, 1000)
    }

    //se for ativado de novo, posso usar essa função para 
    //ser ativdada cada vez que ele executar
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished,setSecondsPassed])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  
  //arrendonda para baixo MAth.ceil arredonda para cima
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = Math.floor(currentSeconds % 60)

  // se não tiver 2 caracteres coloca 0 no começo
  //o maximo é 2
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')


  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds])


    return <CountdownContainer>
    <span>{minutes[0]}</span>
    <span>{minutes[1]}</span>
    <Separator>:</Separator>
    <span>{seconds[0]}</span>
    <span>{seconds[1]}</span>
  </CountdownContainer>
}