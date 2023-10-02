import { Method } from "./styles"

const Contact = () => {
    return (
        <section id="contato">
            <div className="centro">
                <h1 className="section__title" data-aos="zoom-in-down" data-aos-duration="3000">Contato</h1>
                <Method className="metodo" href="mailto:vitor2000rs@gmail.com" data-aos="fade-down" data-aos-duration="2000"><span>E-mail:</span>
                    <span className="email"> vitor2000rs@gmail.com</span></Method>
                <Method className="metodo" href="https://wa.me/+5511975895809" target="_blank" title="Mensagem por Whatsapp"
                    data-aos="fade-up" data-aos-duration="2000"><span>Whatsapp: (11) 97589-5809</span></Method>
            </div>
        </section>
    )
}

export default Contact