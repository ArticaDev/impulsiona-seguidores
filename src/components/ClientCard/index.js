import React from "react";
import style from "./styles";
import CountUp from "react-countup";

const ClientCard = ({ className, number, name, desc, duration, key }) => {
    let numero = Number(number);
    return (
        <>
            <div key={key} className={className}>
                <div  className="card-border flex justify-center items-center mb-9 lg:mx-4">
                    <div className="card-body-internal">
                        <div className="flex justify-center mb-4">
                            <CountUp
                                end={numero}
                                duration={duration}
                                suffix={"+"}
                                className={"texto-vermelho"}
                            />
                        </div>
                        <h4 className="mb-4">{name}</h4>
                        <p className="px-6">{desc}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default style(ClientCard);
