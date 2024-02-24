import styled from "styled-components";

export const CoffesContainer = styled.div`

    h1{
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 2rem;
        line-height: 2.625rem;
    }

`

export const CoffesList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    width: 70rem;
    gap: 2rem;

    padding-top: 3.375rem;
`

export const Coffe = styled.div`
    width: 16rem;
    height: 19.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding-bottom: 1.25rem;

    border-radius: 6px 32px 6px 36px;

    background-color: ${props => props.theme["base-card"]};

    img {
        width: 7.5rem;
        height: 7.5rem;

        margin-top: -1.125rem;
    }

    h3{
        color: ${props => props.theme["yellow-dark"]};
        background-color: ${props => props.theme["yellow-light"]};
        
        padding: 4px 8px 4px 8px;
        border-radius: 100px;

        font-family: 'Roboto', cursive;
        font-weight: 700;

        font-size: 0.625rem;
        line-height: 0.812rem;

        margin: 0.75rem 1rem;

    }

    h1{
        font-family: 'Baloo 2', cursive;
        font-weight: 700;

        line-height: 1.625rem;
        font-size: 1.25rem;

        color: ${props => props.theme["base-subtitle"]};
    }

    h4{
        width: 13.5rem;
        height: 2.25rem;

        font-family: 'Roboto', cursive;
        font-weight: 400;

        line-height: 1.125rem;
        font-size: 0.875rem;

        margin-top: 0.5rem;
        margin-bottom: 2.25rem;

        color: ${props => props.theme["base-label"]};
    }

    div{
        width: auto;
        display: flex;
        align-items: center;

    }

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 0.3rem;

        font-family: 'Baloo 2';
        font-weight: 400;
        
        strong{
            font-weight: 800;
        }

        margin-right: 1.437rem;
    }
    `

export const ButtonIncrimentDecrement = styled.button`
    color: ${props => props.theme.purple};
    background-color: ${props => props.theme["base-button"]};


    font-size: 1rem;
    width: 1.5rem;
    height: 2.375rem;
    padding: 0.5rem;
    
    outline: none;
    border: none;

    cursor: pointer;
    `
export const ContainerButtons = styled.div`
    border-radius: 8px;
    padding: 0.5rem;
    width: 4.5rem;
    height: 2.375rem;

    background-color: ${props => props.theme["base-button"]};
    
    gap: 0.25rem;
    font-size: 1rem;
`

export const ButtonCar = styled.button`
    padding: 0.5rem;
    background-color: ${props => props.theme["purple-dark"]};
    color: ${props => props.theme.white};
    border: none;
    border-radius: 6px;

    width: 2.375rem;
    height: 2.375rem;

    margin-left: 0.5rem;
`