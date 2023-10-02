import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonLink = styled(Link)`
    font-size: 24px;
    font-weight: 400;
    text-decoration: none;
    transition: 0.5s all ease;

    &:hover{animation: background-pan 5s linear infinite;
            background: linear-gradient(
                to right,
                ${colors.ocBlue},
                ${colors.navy},
                ${colors.cyan},
                ${colors.ocBlue}
                );
            background-size: 200%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            white-space: nowrap; 
            opacity: 1;
    }
`

export const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    max-width: 80%;
    margin: 32px auto;

        @media (max-width: ${breakpoints.tablet}){
            grid-template-columns: 1fr;
            column-gap: 0;
        }
`

export const Card = styled.div`
    height: 200px;
    position: relative;
    background-size: cover;

    &:nth-child(5n+1){
        border-radius: 58% 42% 70% 30% / 30% 42% 58% 70%;
        div{
            border-radius: 58% 42% 70% 30% / 30% 42% 58% 70%;
        }
    }

    &:nth-child(5n+2){
        border-radius: 38% 62% 23% 77% / 50% 55% 45% 50%;
        div{
            border-radius: 38% 62% 23% 77% / 50% 55% 45% 50%;
        }
    }

    &:nth-child(5n+3){
        border-radius: 87% 13% 22% 78% / 29% 63% 37% 71%;
        div{
            border-radius: 87% 13% 22% 78% / 29% 63% 37% 71%;
        }
    }

    &:nth-child(5n+4){
        border-radius: 44% 56% 80% 20% / 82% 63% 37% 18%;
        div{
            border-radius: 44% 56% 80% 20% / 82% 63% 37% 18%;
        }
    }

    &:nth-child(5n){
        border-radius: 37% 63% 27% 73% / 18% 81% 19% 82%; 
        div{
            border-radius: 37% 63% 27% 73% / 18% 81% 19% 82%; 
        }
    }
    transition: 0.5s all ease;

    &:hover{
        transition: 0.5s all ease;

        border-radius: 32px; 
        div{
            border-radius: 32px; 

            div{
                background-color: rgba(0,0,0,0.7);
                border-radius: 32px;
                padding: 8px;
                transition: 0.5s all ease;
            }
        }
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid white;
    
    background-color: rgba(0,0,0,0.7);
    backdrop-filter: blur(5px) saturate(0.3);
    transition: 0.5s all ease;

    display: flex;
    justify-content: center;
    align-items:    center;

    &:hover{
        background-color: rgba(0,0,0,0);
        backdrop-filter: blur(1px);
        transition: 0.5s all ease;
    }

    h3{
        user-select: none;
    }
`

export const Title = styled.h2`
    font-size: 5rem;
    margin-bottom: 16px;
    letter-spacing: 2px;
    font-weight: 700;
    margin-top: 16px;

    @media (max-width: ${breakpoints.tablet}){
        font-size: 3rem;
    }
`