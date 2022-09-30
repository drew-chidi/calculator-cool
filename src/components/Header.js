import React, { Fragment } from "react";
import ThemeChanger from "./ThemeChanger";
import Title from "./Title";

const Header = ({ theme, setThemeHandler }) => {
  return (
    <Fragment>
      <header className='flex justify-between mb-7'>
        <Title />
        <ThemeChanger theme={theme} setThemeHandler={setThemeHandler} />
      </header>
    </Fragment>
  );
};

export default Header;
