import React from "react";

const ThemeChanger = ({ theme, setThemeHandler }) => {
  const changeThemeHandler = (e) => {
    setThemeHandler(e.target.value);
  };
  return (
    <div>
      <div>
        <div className='flex flex-col items-end'>
          <div
            className={`${
              theme === "2"
                ? "d-color2"
                : theme === "3"
                ? "d-color3"
                : "text-white"
            } flex font-pop font-bold xs:text-xl`}
          >
            <p className='mx-2.5'>1</p>
            <p className='mx-2.5'>2</p>
            <p className='mx-2.5'>3</p>
          </div>
        </div>
        <div className='flex items-center'>
          <p
            className={`${
              theme === "2"
                ? "d-color2"
                : theme === "3"
                ? "d-color3"
                : "text-white"
            } text-xs xs:text-base font-pop font-bold mr-1`}
          >
            THEME
          </p>
          <div className='t-bg1 p-2 rounded-3xl text-center flex'>
            <button
              value='1'
              onClick={changeThemeHandler}
              className={`${theme === "1" && "t-key1"} w-5 h-5  rounded-full`}
            ></button>
            <button
              value='2'
              onClick={changeThemeHandler}
              className={`${
                theme === "2" && "t-key2"
              } w-5 h-5  rounded-full ml-2`}
            ></button>
            <button
              value='3'
              onClick={changeThemeHandler}
              className={`${
                theme === "3" && "t-key3"
              } w-5 h-5  rounded-full ml-2`}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeChanger;
