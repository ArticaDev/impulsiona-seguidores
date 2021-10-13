import React from "react";
import style from "./styles";
import { Gear, EyeSlashed, Plane, LockOn} from 'akar-icons';


const sectionContact = ({ className }) => {
    const iconSize = 70;
    return (
        <>
            <div className={className}>
                <section className="h-full w-full benefits bg-grey lg:px-20 xl:px-50 pb-12" >
                    <h3 className="titulo m-0 text-black block pt-10 mb-12 px-1">Porque assinar a<strong className="titulo-strong text-green">&nbsp;Impulsiona Seguidores?</strong></h3>
                    <div className="grid lg:grid-flow-row grid-flow-col lg:grid-rows-1 lg:grid-cols-4 grid-rows-4 justify-items-center px-10">
                        <div className="justify-center lg:mt-0 mb-4 card">
                            <Gear className="mx-auto" color={"#575CCC"} size={iconSize} />
                            <h3 className="text-center"><strong>Suporte Impulsionado</strong></h3>
                            <p className="mt-3">Estamos dispostos a <strong className="text-link">te ajudar</strong> em todas as suas eventuais dúvidas.</p>
                        </div>
                        <div className="justify-center lg:mt-0 mb-4 card">
                            <Plane className="mx-auto" color={"#575CCC"} size={iconSize} />
                            <h3 className="text-center"><strong>Rápido e Prático</strong></h3>
                            <p className="mt-3">Faça sua compra em menos de<strong className="text-link"> 57 segundos</strong> em nosso sistema 100% seguro.</p>
                        </div>
                        <div className="justify-center lg:mt-0 mb-4 card">
                            <LockOn className="mx-auto" color={"#575CCC"} size={iconSize} />
                            <h3 className="text-center"><strong>Segurança</strong></h3>
                            <p className="mt-3">Compre seguidores <strong className="text-link">sem correr</strong> qualquer tipo de <strong className="text-link">risco</strong> de ter sua conta bloqueada.</p>
                        </div>
                        <div className="justify-center lg:mt-0  card">
                            <EyeSlashed className="mx-auto" color={"#575CCC"} size={iconSize} />
                            <h3 className="text-center"><strong>Sigilo</strong></h3>
                            <p className="mt-3">Suas informações são totalmente <strong className="text-link"> confidenciais </strong> ninguém saberá que comprou seguidores.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default style(sectionContact);
