import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Filtrar tareas"
      onChange={onSearchValueChange}
      value={searchValue}
    />);
}

export { TodoSearch };
