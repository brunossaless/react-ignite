import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { CoffeIntroImage, IntroContainer, ListUlContainer, TextInfoContainer } from "./styles"
import CoffeImg from '../../assets/CoffeIntro.svg'

export function Intro() {
    return (
        <IntroContainer>
            <TextInfoContainer>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                <ListUlContainer>
                    <ul>

                        <li>
                            <ShoppingCart size={32} weight="fill" />
                            <span>Compra simples e segura</span>
                        </li>
                        <li>
                            <Timer size={32} weight="fill" />
                            <span>Entrega rápida e rastreada</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Package size={32} weight="fill" />
                            <span>Embalagem mantém o café intacto</span>
                        </li>
                        <li>
                            <Coffee size={32} weight="fill" />
                            <span>O café chega fresquinho até você</span>
                        </li>
                    </ul>
                </ListUlContainer>

            </TextInfoContainer>

            <CoffeIntroImage src={CoffeImg} />
        </IntroContainer>
    )
}