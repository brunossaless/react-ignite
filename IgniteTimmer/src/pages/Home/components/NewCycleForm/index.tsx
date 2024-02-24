import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from 'react'
import { useFormContext } from "react-hook-form";
import { CycleContext } from "../../../../contexts/CycleContetx";


export function NewCycleForm(){
  const {activeCycle} = useContext(CycleContext)
  // provider = formProvider
  const { register } = useFormContext()

    return (
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder="Dê um nome para o seu projeto, cara"
            list="taskSuggestions"
            // se tiver algum valor converte pra true
            disabled={!!activeCycle}
            {...register('task')}
          />
          {/* Sugestões para o input */}
          <datalist id="taskSuggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto De Bruno" />
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          {/* step=pula o número de 5 em cinco */}
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            disabled={!!activeCycle}
            // min={5}
            // max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos, </span>
        </FormContainer>
    )
}