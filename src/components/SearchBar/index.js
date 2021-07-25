import React from "react";
import style from "./styles";
import { Search } from "akar-icons";

const SearchBar = ({ searchString, setSearchString, className  }) => {

  function handleSearch(event) {
    setSearchString(event.target.value)
  }

  return(
      <>
      <div className={className}>
        <div className="w-full flex flex-row mt-4 px-6 justify-center items-center">
          <input
            value={searchString} 
            onChange={handleSearch}
            className="w-screen max-w-5xl h-10 p-4 bg-white text-link"
            type="text"
            placeholder="Pesquise por um conteúdo"
          ></input>
          <button>
            <Search className="text-link -ml-10" size={24} />
          </button>
        </div>
      </div>
    </>
  );

}


export default style(SearchBar);
