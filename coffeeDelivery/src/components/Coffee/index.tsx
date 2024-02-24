import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CoffeContext } from "../../contexts/CoffesContext";
import { ButtonCar, ButtonIncrimentDecrement, Coffe, CoffesContainer, CoffesList, ContainerButtons } from "./styles";

export function Coffes() {
    const { coffes } = useContext(CoffeContext)

    return (
        <CoffesContainer>
            <h1>Nossos cafés</h1>
            <CoffesList>
                {coffes.map((coffe) => {
                    return (
                        <Coffe key={coffe.id}>
                            <img src={coffe.img} alt="" />
                            <h3>{coffe.tag}</h3>
                            <h1>{coffe.name}</h1>
                            <h4>{coffe.description}</h4>
                            <div>
                                <span> R$ <strong>{coffe.value}</strong></span>


                                <ContainerButtons>
                                    <ButtonIncrimentDecrement>-</ButtonIncrimentDecrement>
                                    {coffe.quantity}
                                    <ButtonIncrimentDecrement>+</ButtonIncrimentDecrement>

                                </ContainerButtons>

                                <ButtonCar>
                                    <ShoppingCart size={22} weight='fill' />
                                </ButtonCar>

                            </div>
                        </Coffe>
                    )
                })}
            </CoffesList>
        </CoffesContainer>
    )
}