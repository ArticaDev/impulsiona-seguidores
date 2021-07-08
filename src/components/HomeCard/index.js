import React, { useState } from "react";
import Slider from "react-input-slider";
import style from "./styles";
import Advantages from "../Advantages"
import { useForm } from "react-hook-form";
import axios from "axios";
import qs from "qs";

const HomeCard = ({ className }) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {

       data['api_action'] = 'contact_sync';
       data['api_key'] = process.env.GATSBY_ACTIVE_CAMPAIGN_KEY;
       const url = 'https://fluxodigital12.api-us1.com/admin/api.php';
       axios.post(url, qs.stringify(data)).then((response) => { console.log(response.data);})
        .catch((error) => { console.log(error); });
       window.location.replace(products[products[0].titles.indexOf(chosenTitle)].links[valor.x]);

      };
    const [valor, setState] = useState({ x: 0 });
    let products = [
        {
            titles: [
                "No que podemos te ajudar?",
                "De quantos seguidores você precisa?",
                "De quantas curtidas você precisa?",
                "De quantas curtidas e seguidores você precisa?",
                "Para finalizar, deixe-nos verificar seu instagram"
            ],
        },
        {
            followers: ["1000", "1500", "3000", "6000"],
            followersprices: ["55,90", "75,90", "145,90", "279,90"],
            anchorprice:["177","337"],
            links: [
                "http://mon.net.br/17s8xk",
                "http://mon.net.br/17s8xl",
                "http://mon.net.br/17s8xm",
                "http://mon.net.br/17s8xn",
            ],
        },
        {
            likes: ["25", "50", "100", "200"],
            likesprices: ["25,90", "45,90", "84,90", "159,90"],
            anchorprice:["107","197"],
            links: [
                "http://mon.net.br/17s8xv",
                "http://mon.net.br/17s8xx",
                "http://mon.net.br/17s8y0",
                "http://mon.net.br/17s8y1",
            ],
        },
        {
            combos: ["1000", "1500", "3000", "6000"],
            combosprices: ["89,90", "125,90", "249,90", "489,90"],
            anchorprice:["307","587"],
            links: [
                "http://mon.net.br/17s8y3",
                "http://mon.net.br/17s8y4",
                "http://mon.net.br/17s8y5",
                "http://mon.net.br/17s8y7",
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
                        {(valor.x === 2 && actualTitle !== products[0].titles[0] && actualTitle !== products[0].titles[4] ) &&
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
                        className={`flex flex-col items-center mt-12 ${
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

                        {actualTitle === products[0].titles[4] &&
                            <>
                                <div className="flex flex-col justify-center items-center">
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="flex flex-col">
                                                <label htmlFor="field[1]" >Perfil do Instagram:</label>
                                                <input {...register("field[1]")} name="field[1]" id="field[1]" className="w-60 mt-1 border-link border-opacity-25 focus:border-opacity-75 border-2 " required type="text"></input>
                                            </div>
                                            <div className="flex flex-col mt-3">
                                                <label htmlFor="firstname" >Nome:</label>
                                                <input {...register("first_name")} name="first_name" id="first_name" className="w-60 mt-1 border-link border-opacity-25 focus:border-opacity-75 border-2 " required type="text"></input>
                                            </div>
                                            <div className="flex flex-col mt-3 mb-6">
                                                <label htmlFor="email" >E-mail:</label>
                                                <input {...register("email")} name="email" id="email" className="w-60 mt-1 border-link border-opacity-25 focus:border-opacity-75 border-2 " required type="email"></input>
                                            </div>
                                        </div>
                                        <div className="flex justify-center mt-6 mb-3">
                                            <button type="submit" className="btn text-white">Verificar</button>
                                        </div>
                                        <div className="flex justify-center mt-3 mb-6">
                                        <button
                                    onClick={() => {setTitle(chosenTitle);valor.x=0}}
                                    className="btn-inverse text-pink mb-5"
                                >
                                    Voltar
                </button>
                                        </div>
                                        
                                    </form>
                                </div>
                            </>
                        }

                        {actualTitle === products[0].titles[1] && (
                            <>
                                <div className="flex flex-col justify-center items-center">
                                    <h4 className="text-link">
                                        {products[1].followers[valor.x] + " seguidores por mês"}
                                    </h4>
                                    <Slider
                                        className="mt-10"
                                        axis="x"
                                        xstep={1}
                                        xmin={0}
                                        xmax={3}
                                        x={valor.x}
                                        styles={{
                                            track: {
                                                backgroundColor: "#ECECEC",
                                            },
                                            active: {
                                                backgroundColor: "#F2295B",
                                            },
                                            thumb: {
                                                width: 25,
                                                height: 25,
                                                opacity: 1,
                                                background: "#F2295B",
                                            },
                                        }}
                                        onChange={({ x }) => setState((valor) => ({ ...valor, x }))}
                                    />
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
                                        {products[2].likes[valor.x] + " curtidas por post"}
                                    </h4>
                                    <Slider
                                        className="mt-10"
                                        axis="x"
                                        xstep={1}
                                        xmin={0}
                                        xmax={3}
                                        x={valor.x}
                                        styles={{
                                            track: {
                                                backgroundColor: "#ECECEC",
                                            },
                                            active: {
                                                backgroundColor: "#F2295B",
                                            },
                                            thumb: {
                                                width: 25,
                                                height: 25,
                                                opacity: 1,
                                                background: "#F2295B",
                                            },
                                        }}
                                        onChange={({ x }) => setState((valor) => ({ ...valor, x }))}
                                    />
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
                                    <Slider
                                        className="mt-10"
                                        axis="x"
                                        xstep={1}
                                        xmin={0}
                                        xmax={3}
                                        x={valor.x}
                                        styles={{
                                            track: {
                                                backgroundColor: "#ECECEC",
                                            },
                                            active: {
                                                backgroundColor: "#F2295B",
                                            },
                                            thumb: {
                                                width: 25,
                                                height: 25,
                                                opacity: 1,
                                                background: "#F2295B",
                                            },
                                        }}
                                        onChange={({ x }) => setState((valor) => ({ ...valor, x }))}
                                    />
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
                            {(actualTitle === products[0].titles[1] || actualTitle === products[0].titles[3] )&&
                            <Advantages text={["Seguidores","Brasileiros"]}/>
                        }
                            {actualTitle === products[0].titles[2] &&
                            <Advantages text={["Curtidas","Brasileiras"]}/>
                        }
                            <div className="flex justify-center items-center flex-col mt-5">
                                    <button
                                     onClick={() => setTitle(products[0].titles[4])}
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
