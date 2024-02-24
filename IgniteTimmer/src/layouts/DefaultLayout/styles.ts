import styled from 'styled-components'

export const LayoutContainer = styled.div`
    max-width: 74rem;
    /* esse -10rem é os do padding */
    margin: 5rem auto;
    padding: 1.5rem;

    background: ${props => props.theme['gray-800']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`