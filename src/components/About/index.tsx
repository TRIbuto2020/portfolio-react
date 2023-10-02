import { Desc } from "./styles"

const About = () => {
    return (
        <section id="sobre">
            <div className="centro">
                <h1 className="section__title" data-aos="zoom-in-down" data-aos-duration="3000">Sobre</h1>
                <Desc className="desc" data-aos="zoom-in-up" data-aos-duration="3000"><span className="magic">Vitor Rodrigues da
                    Silva</span> é formado em Ciências Biológicas pela USP, aficcionado por esportes e web
                    design.<br /><br />
                    Atualmente pesquisa fisiologia cardiovascular como Mestrando na USP e segue com sua paixão pelo
                    triathlon!<br /><br />
                    Também cursa desenvolvimento Web Full-Stack pela EBAC, com experiência prévia em Python e R.</Desc>
            </div>
        </section>
    )
}

export default About