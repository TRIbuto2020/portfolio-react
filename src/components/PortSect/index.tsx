import { Link } from "react-router-dom"
import { Text } from "./styles"

import data from '../../data/projects.json'

const PortSect = () => {
    const contProj = data.projects.length

    return (
        <section id="portfolio">
            <div className="centro">
                <h1 className="section__title" data-aos="zoom-in-down" data-aos-duration="3000">Portfólio</h1>
                <Text className="text" data-aos="zoom-in-up" data-aos-duration="3000">Apresentando {contProj} projetos incríveis que representam meu compromisso e paixão pelo que faço.
                    <Link className="magic" to={'Portfolio'}>Veja em detalhes!</Link><br />
                </Text>
            </div>
        </section>
    )
}

export default PortSect