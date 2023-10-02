import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Btns, FooterDiv, Paralax } from "./styles"

const Footer = () => {
    function getYear() {
        return new Date().getFullYear()
    }

    return (
        <FooterDiv>

            <div>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <Paralax className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" />
                    </Paralax>
                </svg>
            </div>
            <div className="container">
                <p id="footer">
                    Vitor R. Silva - {getYear()} &copy;
                </p>
                <Btns>
                    <a href="/">Home</a>
                    <Link to="/Portfolio">Portfólio</Link>
                </Btns>
                <a target="_blank" href="https://github.com/TRIbuto2020"><FontAwesomeIcon icon={faGithub} />/TRIbuto2020</a>
            </div>
        </FooterDiv>
    )
}

export default Footer