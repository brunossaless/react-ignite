import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;    

    nav{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;

        a{
            height: 2.375rem;
            text-decoration: none;
        }
        
        a:nth-child(1){
            background-color: ${props => props.theme["purple-light"]};
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5rem;
            gap: 0.2rem;
            border-radius: 8px;

            svg{
                color: ${props => props.theme["purple-dark"]};
            }
        }

        a:nth-child(2){
            color: ${props => props.theme["yellow-dark"]};
            background-color: ${props => props.theme["yellow-light"]};
            border-radius: 8px;
            padding: 0.5rem;
            
        }

    }
`
