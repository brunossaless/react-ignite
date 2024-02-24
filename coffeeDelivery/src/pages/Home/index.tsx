import { Coffes } from "../../components/Coffee";
import { Intro } from "../../components/Intro";
import { HomeContainer } from "./styles";
export function Home(){
    return (
        <HomeContainer>
            <Intro />
            <Coffes />
        </HomeContainer>
    )
}