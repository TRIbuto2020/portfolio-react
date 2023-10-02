import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Desc = styled.p`
    font-size: 2rem;

    @media (max-width: ${breakpoints.tablet}){
        font-size: 1.3rem;
}
`