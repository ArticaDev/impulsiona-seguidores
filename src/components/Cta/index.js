import React from 'react'
import Btn from "../Btn"
import { Link } from "react-scroll";

const Cta = (props) => {
    return (
        <div className="lg:px-52 bg-blue flex flex-col items-center">
            <h3 className="text-center text-white">{props.frasePrincipal}</h3>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
            <Btn className="w-full" inv={false} texto={props.fraseBtn}/>
            </Link>
        </div>
    )
}

export default Cta
