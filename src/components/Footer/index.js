import React from "react";
import style from "./styles";
import img from "../../images/seg.png";

const Footer = ({ className }) => (
  <>
    <div className={className}>
      <div className="h-64 bg-black grid lg:grid-flow-col lg:auto-cols-3 grid-flow-row auto-rows-3">
        <div className="place-self-center lg:m-0 mt-1 mb-3">
          <a href="mailto:contato@impulsionaseguidores.net">
            <h5 className="text-white">contato@impulsionaseguidores.net</h5>
          </a>
        </div>
        <div className="place-self-center lg:m-0 mt-1 mb-3">
          <div className="mb-2">
            <h5 className="text-white text-lg m-0">
              Impulsiona Seguidores - {new Date().getFullYear()}
            </h5>
          </div>
          {/* <div className="mb-1">
            <a href="/" className="text-white">
              Política de Privacidade&nbsp;|&nbsp;
            </a>
            <a href="/" className="text-white">
              Termos de Uso
            </a>
          </div> */}
          <div>
            <p className="text-center text-white text-lg">
              Desenvolvido por&nbsp;
              <a className="text-link" href="https://articadev.com">
                Artica Dev
              </a>
            </p>
          </div>
        </div>
        <div className="place-self-center lg:m-0 mt-1 mb-3">
          <img
            className="h-16"
            style={{ height: "4rem" }}
            alt="seguranca do site"
            src={img}
          ></img>
        </div>
      </div>
    </div>
  </>
);

export default style(Footer);
