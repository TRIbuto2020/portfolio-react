import { useState } from "react"
import { BgImage, Menu, MenuItem, Pattern } from "./styles"

const Header = () => {
    const [bgPos, setBgPos] = useState("40%")

    return (
        <section id="menu">
            <Menu>
                <MenuItem onMouseOver={() => setBgPos("40%")} href="#sobre">Sobre</MenuItem>
                <MenuItem onMouseOver={() => setBgPos("50%")} href="#portfolio">Portifólio</MenuItem>
                <MenuItem onMouseOver={() => setBgPos("60%")} href="#contato">Contato</MenuItem>
            </Menu>

            <Pattern></Pattern>
            <BgImage $position={bgPos}></BgImage>
        </section>
    )
}

export default Header