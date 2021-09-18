import React, { useState } from "react";
import CardSlider from "../CardSlider"
import style from "./styles";
const HomeCard = ({ className }) => {
    
    const [valor, setXValue] = useState({ x: 0 });


    let products = [
        {
            titles: [
                "No que podemos te ajudar?",
                "De quantos seguidores você precisa?",
                "De quantas curtidas você precisa?",
                "De quantas curtidas e seguidores você precisa?",
            ],
        },
        {
            followers: ["1000", "1500", "3000", "6000"],
            followersprices: ["55,90", "75,90", "145,90", "279,90"],
            anchorprice:["177","337"],
            links: [
                "283",
                "292",
                "294",
                "295",
            ],
        },
        {
            likes: ["750", "1500", "3000", "6000"],
            likesprices: ["25,00", "45,00", "85,00", "160,00"],
            anchorprice:["107","197"],
            links: [
                "300",
                "301",
                "302",
                "304",
            ],
        },
        {
            combos: ["1000", "1500", "3000", "6000"],
            combosprices: ["89,90", "125,90", "249,90", "489,90"],
            anchorprice:["307","587"],
            links: [
                "296",
                "297",
                "298",
                "299",
            ],
        },
    ];

  
    let [actualTitle, setTitle] = useState(products[0].titles[0]);
    let [chosenTitle, setchosenTitle] = useState(products[0].titles[0]);

    return (
        <>
            <div className={className}>
                <div
                    className={`card mb-9 mx-auto ${
                        actualTitle === products[0].titles[0] ? "" : "card-increase"
                        }`}
                >
                    <div className="bg-blue block top-0 rounded-t-lg w-full h-20 mb-5">
                        {(valor.x === 2 && actualTitle !== products[0].titles[0]) &&
                        <div className="ribbon-container text-white">
                            <h5 className="ribbon" >POPULAR</h5>
                        </div>}
                        <h2
                            className={`text-white px-4 text-center ${
                                actualTitle === products[0].titles[0] ? "pt-6" : "pt-3 lg:pt-6"
                                }`}
                        >
                            {actualTitle}
                        </h2>
                    </div>
                    <div
                        className={`flex flex-col items-center mt-8 ${
                            actualTitle !== products[0].titles[0] ? "lg:mt-1" : ""
                            }`}
                    >
                        {actualTitle === products[0].titles[0] && (
                            <>

                                <button
                                    onClick={() => { setTitle(products[0].titles[1]); setchosenTitle(products[0].titles[1]) }}
                                    className="btn text-white mb-5"
                                >
                                    Seguidores
                </button>

                                <button
                                    onClick={() => { setTitle(products[0].titles[2]); setchosenTitle(products[0].titles[2]) }}
                                    className="btn text-white mb-5"
                                >
                                    Curtidas
                </button>
                                <button
                                    onClick={() => { setTitle(products[0].titles[3]); setchosenTitle(products[0].titles[3]) }}
                                    className="btn text-white mb-5"
                                >
                                    Seguidores <br></br>e Curtidas
                </button>

                            </>
                        )}

                    

                        {actualTitle === products[0].titles[1] && (
                            <>
                                <div className="flex flex-col justify-center items-center">
                                    <h4 className="text-link">
                                        {products[1].followers[valor.x] + " seguidores por mês"}
                                    </h4>
                                    <CardSlider valor={valor} setXValue={setXValue}/>
                                    <div className="flex flex-row mt-6 lg:ml-6">
                                    {(valor.x === 2 || valor.x === 3) &&
                                        <div className="flex">
                                        <h5 className=" line-through text-black text-opacity-60">R${products[1].anchorprice[valor.x - 2]}
                                        </h5>
</div>
                                         }
                                        <h6 className="flex items-center mr-2">R$</h6>
                                        <h3 className="flex items-center">
                                            {products[1].followersprices[valor.x]}
                                        </h3>

                                        <h6 className="flex items-end">/Mês</h6>
                                    </div>
                                </div>
                            </>
                        )}
                        {actualTitle === products[0].titles[2] && (
                            <div>
                                <div className="flex flex-col justify-center items-center">
                                    <h4 className="text-link">
                                        {products[2].likes[valor.x] + " curtidas por mês"}
                                    </h4>
                                    <CardSlider valor={valor} setXValue={setXValue}/>
                                    <div className="flex flex-row mt-6 lg:ml-6">
                                        {(valor.x === 2 || valor.x === 3) &&
                                        <div className="flex">
                                        <h5 className=" line-through text-black text-opacity-60">R${products[2].anchorprice[valor.x - 2]}
                                        </h5>
</div>
                                         }
                                        <h6 className="flex items-center mr-2">R$</h6>
                                        <h3 className="flex items-center">
                                            {products[2].likesprices[valor.x]}
                                        </h3>

                                        <h6 className="flex items-end">/Mês</h6>
                                    </div>
                                </div>
                            </div>
                        )}
                        {actualTitle === products[0].titles[3] && (
                            <>
                                <div className="flex flex-col justify-center items-center">
                                    <h4 className="text-link text-center px-5">
                                        {products[1].followers[valor.x] +
                                            " seguidores e " +
                                            products[2].likes[valor.x] +
                                            " curtidas por mês"}
                                    </h4>
                                    <CardSlider valor={valor} setXValue={setXValue}/>
                                    <div className="flex flex-row mt-6">
                                    {(valor.x === 2 || valor.x === 3) &&
                                        <div className="flex">
                                        <h5 className=" line-through text-black text-opacity-60">R${products[3].anchorprice[valor.x - 2]}
                                        </h5>
</div>
                                         }
                                        <h6 className="flex items-center mr-2">R$</h6>
                                        <h3 className="flex items-center">
                                            {products[3].combosprices[valor.x]}
                                        </h3>

                                        <h6 className="flex items-end">/Mês</h6>
                                    </div>
                                </div>
                            </>
                        )}
                        {(actualTitle === products[0].titles[1] || actualTitle === products[0].titles[2] || actualTitle === products[0].titles[3]) && (
                            <>
                            <div className="flex justify-center items-center flex-col mt-5">
                                    <button
                                     onClick={() => (window.location.replace("https://cliente.impulsionaseguidores.net/pay/is-plans/?aero-add-to-checkout="+products[products[0].titles.indexOf(chosenTitle)].links[valor.x]))}
                                    className="btn text-white mb-5">Contratar</button>
                                <button
                                    onClick={() => {setTitle(products[0].titles[0]);valor.x=0}}
                                    className="btn-inverse text-pink mb-5"
                                >
                                    Voltar
                </button>
                            </div></>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
};

export default style(HomeCard);
