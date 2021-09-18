import Slider from "react-input-slider";
import { keyframes } from "@emotion/react";
import React from "react";

const CardSlider = (props) => {
    const pulse = keyframes` {
        0% {
            transform: scale(0.95);
            box-shadow: 0px 0px 0px 0px rgba(242,41,91,0.2);
        }
    
        70% {
            transform: scale(1);
            box-shadow: 0px 0px 0px 4px rgba(242,41,91,0.4);
        }
    
        100% {
            transform: scale(0.95);
            box-shadow: 0px 0px 0px 0px rgba(242,41,91,0.2);
        }
    }`


    return (
        <>
<Slider
                                        className="mt-10"
                                        axis="x"
                                        xstep={1}
                                        xmin={0}
                                        xmax={3}
                                        x={props.valor.x}
                                        styles={{
                                            track: {
                                                backgroundColor: "#ECECEC",
                                            },
                                            active: {
                                                backgroundColor: "#F2295B",
                                            },
                                            thumb: {
                                                width: 20,
                                                height: 20,
                                                opacity: 1,
                                                background: "#F2295B",
                                                boxShadow: "0 0 0 0 rgba(0, 0, 0, 1)",
                                                transform: "scale(1)",
                                                animation: `${pulse} 2s infinite`,
                                            },
                                        }}
                                        onChange={({ x }) => props.setXValue((valor) => ({ ...valor, x }))}
                                    />
                                    </>
    )
}

export default CardSlider


