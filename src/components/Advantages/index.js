import React from "react";
import style from "./styles";
import { LockOn, PeopleMultiple, ArrowCycle, Shield, WhatsappFill, Calendar } from 'akar-icons';
const Advantages = ({ className }) => {
    return (
        <div className={className + " flex justify-center"}>
            <div className="grid grid-flow-row lg:grid-flow-row lg:grid-cols-3 lg:grid-rows-2 place-items-start">
                <div className="flex items-center m-2 lg:m-5 "><PeopleMultiple className="text-link mr-3" size={24} /><p className="text">Seguidores Reais e Brasileiros</p></div>
                <div className="flex items-center m-2 lg:m-5 "><LockOn className="text-link mr-3" size={24} /><p className="text">Não precisa informar a senha</p></div>
                <div className="flex items-center m-2 lg:m-5 "><ArrowCycle  className="text-link mr-3" size={24} /><p className="text">Reposição automática</p></div>
                <div className="flex items-center m-2 lg:m-5 "><Shield  className="text-link mr-3" size={24} /><p className="text">Seguro e confiável</p></div>
                <div className="flex items-center m-2 lg:m-5 "><WhatsappFill  className="text-link mr-3" size={24} /><p className="text">Suporte eficiente</p></div>
                <div className="flex items-center m-2 lg:m-5 "><Calendar  className="text-link mr-3" size={24} /><p className="text">Garantia de 7 dias</p></div>
            </div>
        </div>
    );
};

export default style(Advantages);
