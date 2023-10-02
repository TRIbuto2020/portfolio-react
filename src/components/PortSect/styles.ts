import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Text = styled.p`
    font-size: 2rem;

    @media (max-width: ${breakpoints.tablet}){
        font-size: 1.3rem;
    }

    a{
        margin-left: 24px;
    }
`