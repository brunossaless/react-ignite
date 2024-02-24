import { useContext } from "react";
import { CycleContext } from "../../contexts/CycleContetx";
import { HistoryContainer, HistoryList, Status } from "./styles";

//a quanto tempo iniciou
import {formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function History() {
    const {cycles} = useContext(CycleContext)

    return (
        <HistoryContainer>
            <h1>Meu hisórico </h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cycles.map(cycle => {
                            return (
                                <tr key={cycle.id}>
                                    <td>{cycle.task}</td>
                                    <td>{cycle.minutesAmount}</td>
                                    <td>{formatDistanceToNow(new Date(cycle.startDate), {
                                        addSuffix: true,
                                        locale: ptBR,
                                    })}</td>
                                    <td>
                                        { cycle.finishedDate && (<Status statusColor="green">Concluído</Status>)}

                                        { cycle.interruptedDate && (<Status statusColor="red">Interrompido</Status>)}

                                        { !cycle.finishedDate && !cycle.interruptedDate && (<Status statusColor="yellow">Em andamento</Status>)}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    );
}
