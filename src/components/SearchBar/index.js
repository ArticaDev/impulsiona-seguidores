import React from "react";
import style from "./styles";
import { Search } from 'akar-icons';

const SearchBar = ({ className }) => (
  <>
    <div className={className}>
      <div className="container flex flex-row mt-4 px-6 justify-center items-center bg-grey">
      <input className="w-screen max-w-5xl h-10 p-4 bg-white text-link" type="text" placeholder="Pesquise por um conteúdo"></input>
      <button>
      <Search className="text-link ml-2" size={24} />
      </button>
      </div>
    </div>
  </>
);

export default style(SearchBar);
