import React, { useState } from "react";
import style from "./styles";
import { Helmet } from "react-helmet";
import logo from "../../images/logo.png";
import logo_desk from "../../images/logo_desk.png";
import icon from "../../images/favicon.png";
import { ThreeLineHorizontal } from 'akar-icons';
import { Link } from 'react-scroll';
import { useSpring, animated, useSpringRef, useChain } from 'react-spring'



const Header = ({ className }) => {
    const [showMenu, setshowMenu] = useState(false);

    const springApi = useSpringRef();

    let props = useSpring({ ref: springApi, from: { height: 0, opacity: 0 }, to: { height: showMenu ? 220 : 0, opacity: showMenu ? 1 : 0 } })

    const transApi = useSpringRef();


    useChain(showMenu ? [springApi, transApi] : [transApi, springApi], [
        0
    ]);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ImpulsionaSeguidores - Seguidores Reais e Brasileiros Instagram</title>
                <link rel="shortcut icon" href={icon} />
            </Helmet>
            {/* Desktop Navbar */}
            <nav className="h-20 bg-black sticky top-0 z-10 hidden lg:block">
                <div className="container-fluid h-full flex items-center ">
                    <div className="ml-5 w-1/5">
                        <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} offset={-80} >
                            <button className="hidden lg:block">
                                <img alt="logo" style={{height: "3.5rem"}}  className="h-14" src={logo_desk}></img>
                            </button>
                        </Link>
                    </div>
                    <div className={"flex flex-row w-3/5 justify-around mx-auto " + className}>
                                <Link activeClass="active" className=" items-center text-white hover:text-green text active:text-green " to="home" spy={true} smooth={true} duration={500} offset={-80} >Inicio</Link>
                                <Link activeClass="active" className=" items-center text-white hover:text-green text  active:text-green " to="about" spy={true} smooth={true} duration={500} offset={-80} >Sobre Nós</Link>
                                <Link activeClass="active" className=" items-center text-white hover:text-green text active:text-green " to="benefits" spy={true} smooth={true} duration={500} offset={-80} >Benefícios</Link>
                                <Link activeClass="active" className=" items-center text-white hover:text-green  text active:text-green" to="warranty" spy={true} smooth={true} duration={500} offset={-80} >Garantia</Link>
                                <Link activeClass="active" className=" items-center text-white hover:text-green  text active:text-green " to="contact" spy={true} smooth={true} duration={500} offset={-80}>Contato</Link>
                                <a activeClass="active" href="blog" className="flex items-center text-white hover:text-green  text active:text-green">Blog</a>
                    </div>
                        <div className="col hidden lg:flex w-1/5"></div>
                </div>
                </nav>

            {/* Mobile Navbar */}
            <nav className="h-20 bg-black sticky top-0 z-10 lg:hidden">
                <div className="container-fluid h-full flex items-center ">
                    <div className="ml-5 w-1/5">
                        <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} offset={-80} >
                        <button className="lg:hidden">
                                <img alt="logo" style={{height: "3.5rem"}} className="h-14" src={logo}></img>
                            </button>
                        </Link>
                    </div>
                    <div className={"flex flex-row w-4/5 justify-end mx-auto " + className}>
                    <button className="mr-5 lg:hidden" onClick={() => setshowMenu(!showMenu)}>
                            <ThreeLineHorizontal color={"#00CD00"} size={40} />
                    </button>      
                    </div>
                    </div>
                <animated.div className={`flex-col bg-black`} style={props}>
                    {showMenu &&
                        <>
                            <Link activeClass="active" className="flex cursor-pointer justify-center items-center text-white hover:text-green text-lg active:text-green mb-2" to="home" spy={true} smooth={true} offset={-80} duration={500} >Inicio</Link>
                            <Link activeClass="active" className="flex cursor-pointer  justify-center items-center text-white hover:text-green text-lg	 active:text-green mb-2" to="about" spy={true} smooth={true} duration={500} offset={-80} >Sobre Nós</Link>
                            <Link activeClass="active" className="flex cursor-pointer   justify-center items-center text-white hover:text-green text-lg	active:text-green mb-2 " to="benefits" spy={true} smooth={true} duration={500} offset={-80} >Benefícios</Link>
                            <Link activeClass="active" className="flex  cursor-pointer  justify-center items-center text-white hover:text-green text-lg	 active:text-green mb-2" to="warranty" spy={true} smooth={true} duration={500} offset={-80} >Garantia</Link>
                            <Link activeClass="active" className="flex cursor-pointer  justify-center  items-center text-white hover:text-green text-lg	 active:text-green pb-2" to="contact" spy={true} smooth={true} duration={500} offset={-80}>Contato</Link>
                            <a activeClass="active" href="blog" className="flex cursor-pointer  justify-center  items-center text-white hover:text-green text-lg active:text-green pb-2">Blog</a>
                        </>}
                </animated.div>
                
                </nav>
        </>)
};

export default style(Header);
