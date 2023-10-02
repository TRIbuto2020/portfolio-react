import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Img = styled.img`
    width: 50%;
    border-radius: 16px;;

    @media(max-width: ${breakpoints.desktop}){
        width: 80%;
        margin-top: 32px; 
    }
`

export const Layout = styled.div`
    display: flex;
    margin-top: 32px;
    margin-bottom: 42px;
    align-items: center;
    justify-content: space-around;

    @media(max-width: ${breakpoints.desktop}){
        flex-direction: column;

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`

export const Title = styled.h2`
    font-size: 4rem;
    letter-spacing: 2px;
    font-weight: 700;
    
    @media (max-width: 780px){
        text-align: center;
        font-size: 3rem;
    }
    
`

export const Desc = styled.p`
    width: 80%;
    margin-top: 18px;
    @media(max-width: ${breakpoints.desktop}){
        text-align: center;
    }

    &.left{
        text-align: left;
    }

    &.right{
        text-align: right;
    }
`


export const TechList = styled.ul`
    display: flex;
    gap: 18px;
    max-width: 80vw;

    li{
        list-style: inside;
    }

    li:nth-child(1){
        list-style: none;
    }
`

export const BtnVisit = styled.a`
    font-size: 3.5rem;
    display: block;
    text-align: center;
    margin-bottom: 42px;
`
