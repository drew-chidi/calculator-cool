import React from "react";

const Button = ({
  theme,
  input,
  name,
  setKeyInputHandler,
  id,
  deleteKeyHandler,
  operatorHandler,
  equalsHandler,
  resetHandler,
  idType,
}) => {
  //  Theme Styles for buttons
  let themeStyle;
  if (name === "DEL") {
    themeStyle = `${
      theme === "3"
        ? "r-key3 text-white"
        : theme === "2"
        ? "r-key2 text-white"
        : "r-key1 text-white"
    } xs:text-xl text-base font-bold font-pop rounded-lg`;
  } else if (name === "RESET") {
    themeStyle = `${
      theme === "3"
        ? "r-key3 text-white"
        : theme === "2"
        ? "r-key2 text-white"
        : "r-key1 text-white"
    } font-bold font-pop col-span-2 rounded-lg xs:text-xl text-base`;
  } else if (name === "=") {
    themeStyle = `${
      theme === "3" ? "e-key3" : theme === "2" ? "e-key2" : "e-key1"
    } font-bold font-pop col-span-2 rounded-lg`;
  } else {
    themeStyle = `${
      theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
    }  font-bold font-pop rounded-lg focus:opacity-50 active:opacity-50`;
  }

  const keyInputHandler = (e) => {
    if (name === "DEL") {
      deleteKeyHandler();
    } else if (id === "op") {
      operatorHandler(e.target.name);
    } else if (name === "=") {
      equalsHandler();
    } else if (name === "RESET") {
      resetHandler();
    } else {
      setKeyInputHandler(e.target.name);
    }
  };

  return (
    <>
      <button
        id={id}
        disabled={input === "Error!"}
        name={name}
        onClick={keyInputHandler}
        className={themeStyle}
      >
        {idType || name}
      </button>
    </>
  );
};

export default Button;
