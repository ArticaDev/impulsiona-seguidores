import React from "react";
import {
  ShippingBoxV1,
  Pencil,
  Money,
  ChevronRight,
  ChevronDown,
} from "akar-icons";

const SectionStep = () => {
  const steps = [
    {
      titleStep: "Escolha um plano",
      icon: <ShippingBoxV1 className="text-pink" size={36} />,
      contentStep:
        "Há uma variedade de pacotes de seguidores, curtidas ou os dois para você escolher em nosso site.",
    },
    {
      titleStep: "Insira seu @usuário",
      icon: <Pencil className="text-pink" size={36} />,
      contentStep:
        "Digite seu nome de usuário do Instagram sem precisar mencionar a senha.",
    },
    {
      titleStep: "Finalize o pagamento",
      icon: <Money className="text-pink" size={36} />,
      contentStep:
        "Escolha um dos diferentes tipos de pagamento e começaremos imediatamente a adicionar seguidores à sua conta.",
    },
  ];

  return (
    <section className="bg-grey py-6 xl:px-44">
      <h2 className="text-center m-0 pb-8 pt-4 px-2">
        <strong className="text-green">Como comprar</strong> seguidores no
        Instagram
      </h2>
      <div className="grid grid-flow-row-dense xl:grid-flow-col-dense items-center justify-center place-items-center max-w-screen-2xl place-self-center">
        {steps.map((step, index) => {
          return (
            <>
              <div
                key={index}
                className="m-4 p-4 bg-white mt-5 rounded-md shadow-md h-64 w-80 flex flex-col place-content-center"
              >
                <div className="flex justify-center">{step.icon}</div>
                <h4 className="text-link text-3xl text-center">
                  {step.titleStep}
                </h4>
                <h5 className="text-sm">{step.contentStep}</h5>
              </div>
              {index !== 2 && (
                <div>
                  <ChevronDown
                    className="block xl:hidden text-pink"
                    size={24}
                  />
                  <ChevronRight
                    className="hidden xl:block text-pink"
                    size={24}
                  />
                </div>
              )}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default SectionStep;
