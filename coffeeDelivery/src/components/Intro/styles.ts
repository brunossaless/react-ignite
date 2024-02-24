import styled from "styled-components";

export const IntroContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 34rem;
    gap: 3.5rem;
    
`

export const TextInfoContainer = styled.div`
    padding-top: 5.75rem;
    width: 38.75rem;
    text-align: left;

    
    h1 {
        padding-bottom: 1rem;
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        line-height: 3.875rem;
        font-size: 3rem;
        word-wrap: wrap;

        color: ${props => props.theme["base-title"]};
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        font-style: regular;
        line-height: 1.625rem;
        font-weight: 400;
        min-width: 100px;

        color: ${props => props.theme["base-subtitle"]};
    }
`
export const ListUlContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 4.75rem;
    height: 5.25rem;


    ul{
        list-style: none;
        li {
            gap: 1.3rem;
            padding-bottom: 1.56rem;
            display: flex;
            justify-content: center;
            align-items: center;
            
            span{
                color: ${props => props.theme["base-text"]};
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                font-size: 1rem;
                line-height: 1.312rem;
            }

            svg{
                color: ${props => props.theme.white};
                padding: 0.5rem;
                border-radius: 999px;
            }
        }
    }

    ul{
        :nth-child(1){
            li {
                :nth-child(1){
                    svg{
                        background-color: ${props => props.theme["yellow-dark"]};   
                    }
                }

                :nth-child(2){
                    svg{
                        background-color: ${props => props.theme.yellow};
                    }
                }
            }
        }

        :nth-child(2){
            li {
                :nth-child(1){
                    svg{
                        background-color: ${props => props.theme["base-text"]};   
                    }
                }

                :nth-child(2){
                    svg{
                        background-color: ${props => props.theme.purple};
                    }
                }
            }
        }
    }
`

export const CoffeIntroImage = styled.img`
    margin: 5.75rem 10rem 5.75rem 0;
    
    width: 29.75rem;
    height: 22.5rem;
`