import React from "react";
import style from "./styles";
import warranty from "../../images/warranty.png";

const sectionWarranty = ({ className }) => {
    return (
        <>
            <div className={className}>
                <section className="h-full w-full bg-blue warranty px-10 lg:px-52" >
                    <h3 className="titulo m-0 text-white block mx-auto pt-6 mb-5">Ainda em<strong className="titulo-strong">&nbsp;dúvida?</strong></h3>
                    <img
                        className="flex mx-auto h-48 mb-10"
                        style={{height: "12rem"}}
                        src={warranty}
                        alt="7 dias de garantia"
                    ></img>
                    <p className="text-white mt-10">Nós temos certeza de que você vai gostar dos resultados obtidos com a <strong className="text-green">IMPULSIONA SEGUIDORES</strong> e por isso oferecemos garantia total de satisfação ou seu dinheiro de volta.</p>
                    <p className="text-white mt-10">Se durante os <strong className="text-green">7 dias</strong> de sua assinatura você não estiver satisfeito, devolveremos o valor investido. Sem pegadinha, sem central de atendimento.</p>
                    <p className="text-white mt-10 pb-10">Não precisa nem nos contar o motivo, 100% do seu investimento de volta. <strong className="text-green">Risco zero.</strong> Este é um compromisso nosso com os seus resultados!</p>
                </section>
            </div>
        </>

    );
};

export default style(sectionWarranty);
