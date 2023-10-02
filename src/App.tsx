import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Rotas from './routes'
import { GlobalCss } from './styles'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';



function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <BrowserRouter>
      <GlobalCss />
      <ScrollToTop />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App

