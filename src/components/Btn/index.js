import React from "react";
import style from "./styles";

const Btn = ({ className, texto, func, inv }) => (
  <>
    <div className={className}>
      {!inv && 
    <button onClick={func} className="btn text-white my-5">{texto}</button>
      }
      {inv && 
    <button onClick={func} className="btn-inverse text-pink my-5">{texto}</button>
      }
    </div>
  </>
);

export default style(Btn);
