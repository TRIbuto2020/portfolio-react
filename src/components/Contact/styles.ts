import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Method = styled.a`
    display: block;
    text-align: center;
    width: 80%;
    border: 3px solid ${colors.ocBlue};
    margin: 64px auto;
    padding: 8px;
    border-radius: 40px;
    font-size: 2.5rem;
    transition: all 1s ease;

    span{
        transition: all 1s ease;
    }

    &:hover{
        background-color: ${colors.ocBlue};
        color: ${colors.bgDark};
        border-color: ${colors.bgDark};
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;        

        span{
            color: ${colors.bgDark};
            transition: all 1s ease;
        }
    }


    @media (max-width: ${breakpoints.tablet}){
        font-size: 1.5rem;
        
        span{
            display: block;

            &.email{
                font-size: 1rem;
            }
        }
    }
`