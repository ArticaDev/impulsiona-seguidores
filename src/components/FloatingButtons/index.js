import React, { useState, useEffect } from "react";
import style from "./styles";
import { WhatsappFill, ChevronUp } from "akar-icons";
import { Link } from "react-scroll";

const FloatingButtons = ({ className, pageUrl }) => {
  let [initialClass, setInitialClass] = useState("hidden");
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setInitialClass("opacity-1 block");
      } else {
        setInitialClass("opacity-0 hidden");
      }
    };
  }, []);

  return (
    <>
      <div className={className}>
        <div className="bottom-0 fixed z-50 right-0">
          <div className="flex justify-center flex-col">
            <button className="mb-4 ">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5534996634683&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20site%20Impulsiona%20Seguidores!"
              >
                <WhatsappFill
                  className="mr-16 rounded-full bg-white"
                  color={"#00E676"}
                  enableBackground={"#FFF"}
                  size={40}
                />
              </a>
            </button>
            <button>
              {!(pageUrl.includes("blog")) &&
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <ChevronUp
                  className={`rounded-full ${initialClass}`}
                  color={"#00CD00"}
                  size={40}
                />
              </Link>}
              {(pageUrl.includes("blog")) &&
              <Link
                to="topo-blog"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <ChevronUp
                  className={`rounded-full ${initialClass}`}
                  color={"#00CD00"}
                  size={40}
                />
              </Link>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default style(FloatingButtons);
