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

    let props = useSpring({ ref: springApi, from: { height: 0, opacity: 0 }, to: { height: showMenu ? 190 : 0, opacity: showMenu ? 1 : 0 } })

    const transApi = useSpringRef();


    useChain(showMenu ? [springApi, transApi] : [transApi, springApi], [
        0
    ]);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Impulsiona Seguidores</title>
                <link rel="shortcut icon" href={icon} />

                <!-- Facebook Pixel Code -->
                <script>
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '360446088744316');
                fbq('track', 'PageView');
                </script>
                <noscript><img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=360446088744316&ev=PageView&noscript=1"
                /></noscript>
                <!-- End Facebook Pixel Code -->


                <!-- Hotjar Tracking Code for https://impulsionaseguidores.net/ -->
                <script>
                    (function(h,o,t,j,a,r){
                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                        h._hjSettings={hjid:2360444,hjsv:6};
                        a=o.getElementsByTagName('head')[0];
                        r=o.createElement('script');r.async=1;
                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                        a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                </script>


            </Helmet>
            <nav className="h-20 bg-black sticky top-0 z-10">
                <div className="container-fluid h-full flex items-center ">
                    <div className="ml-5">
                        <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} offset={-80} >
                            <button className="lg:hidden">
                                <img alt="logo" style={{height: "3.5rem"}} className="h-14" src={logo}></img>
                            </button>
                            <button className="hidden lg:block">
                                <img alt="logo" style={{height: "3.5rem"}}  className="h-14" src={logo_desk}></img>
                            </button>

                        </Link>
                    </div>
                    <div className="flex wrap w-full justify-end lg:justify-center">
                        <button className="mr-5 lg:hidden" onClick={() => setshowMenu(!showMenu)}>
                            <ThreeLineHorizontal color={"#00CD00"} size={40} />
                        </button>
                        <div className={className}>
                            <div className="flex-row hidden lg:flex">
                                <Link activeClass="active" className="flex items-center text-white hover:text-green text active:text-green mr-8" to="home" spy={true} smooth={true} duration={500} offset={-80} >Inicio</Link>
                                <Link activeClass="active" className="flex items-center text-white hover:text-green text  active:text-green mr-8" to="about" spy={true} smooth={true} duration={500} offset={-80} >Sobre Nós</Link>
                                <Link activeClass="active" className="flex items-center text-white hover:text-green text active:text-green mr-8" to="benefits" spy={true} smooth={true} duration={500} offset={-80} >Benefícios</Link>
                                <Link activeClass="active" className="flex items-center text-white hover:text-green  text active:text-green mr-8" to="warranty" spy={true} smooth={true} duration={500} offset={-80} >Garantia</Link>
                                <Link activeClass="active" className="flex items-center text-white hover:text-green  text active:text-green" to="contact" spy={true} smooth={true} duration={500} offset={-80}>Contato</Link>
                            </div>
                        </div>
                        <div className="col hidden lg:flex w-56"></div>
                    </div>
                </div>
                <animated.div className={`flex-col bg-black lg:hidden`} style={props}>
                    {showMenu &&
                        <>
                            <Link activeClass="active" className="flex cursor-pointer justify-center items-center text-white hover:text-green text-lg active:text-green mb-2" to="home" spy={true} smooth={true} offset={-80} duration={500} >Inicio</Link>
                            <Link activeClass="active" className="flex cursor-pointer  justify-center items-center text-white hover:text-green text-lg	 active:text-green mb-2" to="about" spy={true} smooth={true} duration={500} offset={-80} >Sobre Nós</Link>
                            <Link activeClass="active" className="flex cursor-pointer   justify-center items-center text-white hover:text-green text-lg	active:text-green mb-2 " to="benefits" spy={true} smooth={true} duration={500} offset={-80} >Benefícios</Link>
                            <Link activeClass="active" className="flex  cursor-pointer  justify-center items-center text-white hover:text-green text-lg	 active:text-green mb-2" to="warranty" spy={true} smooth={true} duration={500} offset={-80} >Garantia</Link>
                            <Link activeClass="active" className="flex cursor-pointer  justify-center  items-center text-white hover:text-green text-lg	 active:text-green pb-2" to="contact" spy={true} smooth={true} duration={500} offset={-80}>Contato</Link>
                        </>}
                </animated.div>
            </nav>
        </>)
};

export default style(Header);
