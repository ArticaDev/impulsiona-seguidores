import React from "react";
import ClientCard from "../../components/ClientCard";
import style from "./styles";
import img from "../../images/testimonial.png";

const CardContainer = ({ className }) => {
  return (
    <div className={className}>
      <div className="mx-auto pb-6">
        <h1 className="mx-auto mb-5 lg:mb-10">
          Pedidos & <strong>Clientes</strong>
        </h1>
        <div className="flex justify-center items-center flex-col lg:flex-row auto-cols-3">
          <ClientCard
            number={"20000"}
            name={"CLIENTES"}
            desc={[
              "Nosso serviço já atingiu a marca de mais de ",
              <strong>20 mil clientes</strong>,
              " ativos espalhados pelo Brasil",
            ]}
            key="1"
            duration={2}
          />
          <ClientCard
            number={"27000"}
            name={"PEDIDOS ENTREGUES"}
            desc={[
              "Atualmente já entregamos mais de ",
              <strong>27 mil pedidos</strong>,
              " de seguidores e curtidas para os perfis de nossos clientes!",
            ]}
            key="2"
            duration={2.5}
          />
          <ClientCard
            number={"950000"}
            name={"SEGUIDORES ENTREGUES"}
            desc={[
              "Hoje nossa conta de seguidores brasileiros e mundiais entregues está em quase ",
              <strong>1 milhão!</strong>,
            ]}
            key="3"
            duration={3}
          />
        </div>
        <h5 className="text-center">
          <strong>
            "Impulsiona Seguidores é ótimo!! Meus seguidores estão 10x maiores
            por causa deles!"
          </strong>
        </h5>
        <div className="flex lg:justify-end lg:px-52 mt-4 place-content-center items-center">
          <img className="w-16 mr-4" alt="testimonial" src={img}></img>
          <h6 className="lg:text-sm text-base text-center m-0">
            <strong>@_biamarques</strong>
            <br></br> Influencer Digital
          </h6>
        </div>
      </div>
    </div>
  );
};

export default style(CardContainer);
