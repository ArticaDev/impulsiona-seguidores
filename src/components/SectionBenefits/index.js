import React from "react";
import style from "./styles";
import { CircleChevronUp, EyeSlashed, Money } from 'akar-icons';


const sectionContact = ({ className }) => {
    return (
        <>
            <div className={className}>
                <section className="h-full w-full benefits bg-grey px-10 lg:px-50 xl:px-60 pb-24" >
                    <h3 className="titulo m-0 text-black block mx-auto pt-10 mb-12">Porque assinar a<strong className="titulo-strong text-green">&nbsp;Impulsiona Seguidores?</strong></h3>
                    <div className="flex flex-col md:flex-row justify-center px-10">
                        <div className="justify-center mx-auto mb-7 card">
                            <CircleChevronUp className="mx-auto" color={"#575CCC"} size={50} />
                            <h3 className="text-center"><strong>Alcance</strong></h3>
                            <p className="mt-3">Alcance mais pessoas para divulgar seu conteúdo e se torne popular na rede do Instagram.</p>
                        </div>
                        <div className="justify-center mx-auto mb-7 card">
                            <EyeSlashed className="mx-auto" color={"#575CCC"} size={50} />
                            <h3 className="text-center"><strong>Sigilo</strong></h3>
                            <p className="mt-3">Nosso processo de entrega de seguidores e curtidas é totalmente sigiloso, nem o Instagram fica sabendo!</p>
                        </div>
                        <div className="justify-center mx-auto card">
                            <Money className="mx-auto" color={"#575CCC"} size={50} />
                            <h3 className="text-center"><strong>Melhor Custo-Benefício</strong></h3>
                            <p className="mt-3">Nossos planos possuem o melhor custo e qualidade de seguidores de todas as plataformas disponíveis!</p>
                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default style(sectionContact);
