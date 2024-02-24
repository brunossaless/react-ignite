import { HandPalm, Play } from "phosphor-react";
import { createContext, useContext, useEffect, useState } from "react";
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles";

import { Countdown } from "./components/Countdown";
import { NewCycleForm } from "./components/NewCycleForm";
import { FormProvider, useForm } from "react-hook-form";

//yup, joy, zod são bibliotecas de validação
//npm i zod
//npm i @hookform/resolvers = integrar hookform com as lib de validação
import zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { CycleContext, CyclesContextProvider } from "../../contexts/CycleContetx";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number()
    .min(5, 'O número precisa ser de no mínimo 5 minutos')
    .max(60, 'O número precisa ser menor ou igual que 60 minutos')
})

// interface newCycleFormData {
//   task: string,
//   minutesAmount: number,
// }

// pegou a tipagem do newCycleFormValidationSchema
type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const {createNewCycle, interruptCurrentCycle, activeCycle } = useContext(CycleContext)

  //register recebe o nome do input
  //ela retorna os métodos do input do js, onChange e tals
  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const { handleSubmit, watch, reset, formState } = newCycleForm

  //Para validação de form
  // console.log(formState.errors)


  //vai observar o campo de task em tempo real
  //task vira controled
  const task = watch('task')
  const isSubmitDisabled = !task

  //handle = quando é chamada de um evento
  function handleCreatenewCycle(data: newCycleFormData){
    createNewCycle(data)
    reset()

    
  }

  // Prop Drilling - muitas propriedades apenas para comunicação entre os componentes
  //context API - compartilhar informações entre varios componentes ao mesmo tempo

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreatenewCycle)} action="">

{/* acessar algo do formulário */}
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>

          <Countdown />

        {/* !task = quando não tiver task */}
        {activeCycle ?
          (
            <StopCountdownButton
              onClick={interruptCurrentCycle}
              type="button">
              <HandPalm size={24} />
              Interromper
            </StopCountdownButton>
          ) : (

            <StartCountdownButton
              type="submit"
              disabled={isSubmitDisabled}
            >
              <Play size={24} />
              Começar
            </StartCountdownButton>
          )
        }
      </form>
    </HomeContainer>
  )
}
