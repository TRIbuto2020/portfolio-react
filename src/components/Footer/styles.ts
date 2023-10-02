import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterDiv = styled.footer`
    height: 50vh;
    width: 100vw;
    scroll-snap-align: start;

    .container{
        background-color: ${colors.ocBlue};
        height: 100%;
        width: 100%;
        padding: 10vw;
        margin: 0 auto;

        p, a{
            display: block;
            text-align: center;
        }

        a:hover{
            color: ${colors.bgDark}
        } 
    }
    
    .waves {
        position:relative;
        width: 100%;
        height:15vh;
        margin-bottom:-7px;
        min-height:100px;
        max-height:150px;
    }
`

export const Paralax = styled.g`
    & > use {
        animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
    }
    & > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
        fill: rgba(33, 176, 201, 0.7);
    }
    & > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
        fill: rgba(33, 176, 201, 0.5);
    }
    & > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
        fill: rgba(33, 176, 201, 0.3);
    }
    & > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
        fill: ${colors.ocBlue};
    }
`

export const Btns = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 18px;
    margin-bottom: 18px;

    a{
        padding: 12px;
        border: 2px solid white;
        border-radius: 32px;
        font-size: 1.5rem;
        transition: all 1s;

        &:hover{
            transition: all 1s;
            border-color: #030918;
            background-color: #030918;
            color: #21b0c9;
            box-shadow: inset 0 -23px 25px #0000002b, inset 0 -36px 30px #00000026, inset 0 -79px 40px #0000001a, 0 2px 1px #0000000f, 0 4px 2px #00000017, 0 8px 4px #00000017, 0 16px 8px #00000017, 0 32px 16px #00000017;
        }
    }
`