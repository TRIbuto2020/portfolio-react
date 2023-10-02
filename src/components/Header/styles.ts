import styled from 'styled-components'
import { colors } from '../../styles'



export const BgImage = styled.div<{ $position?: string; }> `
    background-image: url("https://cepe.usp.br/wp-content/uploads/piscina-cepeusp-reabertura-2-sem-2017.jpg");
    background-position: center ${props => props.$position || "40%"};
    background-size: 180vmax;
    height: 100vh;
    left: 0px;  
    opacity: 1;
    position: absolute;
    top: 0px;
    transition: opacity 800ms ease,
    background-size 800ms ease,
    background-position 800ms ease;
    width: 100%;
    z-index: 0;
`

export const MenuItem = styled.a`
    cursor: pointer;
    display: block;
    font-weight: 700;
    font-size: clamp(2rem, 8vw, 8rem);
    padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;
    text-decoration: none;
    transition: opacity 400ms ease;
`

export const Pattern = styled.div`
    background: url(/bgmenu.png);
        background-position: 0% 0%;
        background-size: 110vmin ;
        height: 100vh;
        left: 0px;
        position: absolute;
        top: 0px;
        transition: opacity 800ms ease, 
        background-size 800ms ease,
        background-position 800ms ease;
        width: 100vw;
        z-index: 1;
        opacity: .9;
        background-repeat: repeat-y;
        animation: background-rise 70s linear infinite;
        backdrop-filter: blur(5px) saturate(150%) brightness(50%);
        filter: brightness(150%);
`

export const Menu = styled.div`
    margin-left: clamp(4rem, 20vw, 48rem);
    position: relative;
    z-index: 2;

    &:hover{
        & > ${MenuItem}{
            opacity: 0.3;
        }
        & ~ ${Pattern} {
            background-size: 90vmin ;
            opacity: 0.55;
        }
        & ~ ${BgImage} {
            background-size: 150vmax;
        }
        & > ${MenuItem}:hover {
            animation: background-pan 5s linear infinite;
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
    }
`
