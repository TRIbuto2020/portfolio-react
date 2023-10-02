import styled from 'styled-components'

export const ScrollSnap = styled.div`
section{
    height: 100vh;
    width: 100vw;
    scroll-snap-align: center;
    align-items: center;
    display: flex;

    .section__title{
    font-size: 5rem;
    margin-bottom: 16px;
    letter-spacing: 2px;
    font-weight: 700;

    @media (max-width: 780px){
        font-size: 3rem;
    }
    }
}
`