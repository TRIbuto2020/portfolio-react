import About from "../../components/About"
import Contact from "../../components/Contact"
import Header from "../../components/Header"
import PortSect from "../../components/PortSect"
import { ScrollSnap } from "./styles"

const Home = () => {

    return (
        <ScrollSnap>
            <Header />
            <About />
            <PortSect />
            <Contact />
        </ScrollSnap>
    )
}

export default Home