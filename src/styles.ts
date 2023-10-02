import { createGlobalStyle } from 'styled-components'

export const colors = {
  ocBlue: 'rgb(33, 176, 201)',
  navy: 'rgb(32, 34, 175)',
  cyan: 'rgb(39, 248, 231)',
  bgDark: 'rgb(3, 9, 24)'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`

  @keyframes background-pan {
    from {
      background-position: 0% center;
    }
    
    to {
      background-position: -200% center;
    }
  }

  @keyframes background-rise {
    from {
      background-position: 0% 0%;
    }
    
    to {
      background-position: 0% -330vh;
    }
  }

  @keyframes move-forever {
    0% {
      transform: translate3d(-90px,0,0);
    }
    100% { 
      transform: translate3d(85px,0,0);
    }
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lexend', sans-serif;
    color: white;
    text-decoration: none;
  }

  html{
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    width: 100vw;
  }

  body {
    background-color: ${colors.bgDark};
    background-image: url(/stars.png);
    background-size: cover;
    overflow-x: hidden;
    animation: background-rise 800s linear infinite;
  }

  

  .centro{
    margin: 0 auto;
    position: relative;
    max-width: 1080px;
    width: 80%;
  }

  .magic{
    animation: background-pan 5s linear infinite;
    background: linear-gradient(
      to right,
      ${colors.cyan},
      ${colors.ocBlue},
      ${colors.navy},
      ${colors.cyan}
    );
    background-size: 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  
`
export const RemoveScrollSnap = createGlobalStyle`
  html{
    scroll-snap-type: none;
    width: 100vw;
  }
`