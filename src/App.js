import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // ##Theme State##
  const [theme, setTheme] = useState("1");

  // ##Input Display State##
  const [input, setInput] = useState("");

  // ##Effect##
  useEffect(() => {
    const currentTheme = localStorage.getItem("themes");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  // ##Theme Handler Function##
  const changeThemeHandler = (e) => {
    setTheme(e.target.value);
    localStorage.setItem("themes", e.target.value);
  };

  // ##Key Input Handler##
  const keyInputHandler = (e) => {
    setInput(input.concat(e.target.name));
  };

  // ##Delete Key Handler##
  const deleteKeyHandler = () => {
    setInput(input.slice(0, input.length - 1));
  };

  // ##Reset Function##
  const resetHandler = () => {
    setInput("");
  };

  // ##Calculate##
  const calculateHandler = () => {
    try {
      setInput(eval(input).toString());
    } catch (err) {
      setInput("Error!");
    }
  };
  return (
    <div
      className={`${
        theme === "1" ? "m-bg1" : theme === "2" ? "m-bg2" : "m-bg3"
      } flex items-center justify-center p-6 xl:py-20 h-screen w-screen`}
    >
      {/* Calculator Container */}
      <div className='max-w-[375px] md:max-w-[50%] xl:max-w-[100%]'>
        {/* Theme Changer, Header */}
        <header className='flex justify-between mb-7'>
          <div
            className={`${
              theme === "2"
                ? "d-color2"
                : theme === "3"
                ? "d-color3"
                : "text-white"
            }  xs:text-[2rem] font-pop font-bold`}
          >
            calc
          </div>
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
                  className={`${
                    theme === "1" && "t-key1"
                  } w-5 h-5  rounded-full`}
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
        </header>
        <section>
          <div className='flex flex-col w-full '>
            {/* Calculator Display */}
            <label className='w-full'></label>
            <input
              disabled
              type='text'
              value={input}
              className={`${
                theme === "2"
                  ? "d-color2 s-bg2"
                  : theme === "3"
                  ? "d-color3 s-bg3"
                  : "text-white s-bg1"
              } text-5xl font-pop font-bold w-full h-20 rounded-xl mb-6 text-right`}
            />

            {/* Keypad */}
            <div
              className={`${
                theme === "3" ? "t-bg3" : theme === "2" ? "t-bg2" : "t-bg1"
              } grid grid-cols-4 gap-3 xs:text-[2rem] p-4 xs:p-6 rounded-xl`}
            >
              <button
                disabled={input === "Error!"}
                name='7'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                }  font-bold font-pop rounded-lg`}
              >
                7
              </button>
              <button
                disabled={input === "Error!"}
                name='8'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } py-2 font-bold font-pop rounded-lg`}
              >
                8
              </button>
              <button
                disabled={input === "Error!"}
                name='9'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } py-2 font-bold font-pop rounded-lg`}
              >
                9
              </button>
              <button
                disabled={input === "Error!"}
                id='backspace'
                onClick={deleteKeyHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                }  py-2 xs:text-xl text-base font-bold font-pop rounded-lg`}
              >
                DEL
              </button>
              <button
                disabled={input === "Error!"}
                name='4'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } py-2 font-bold font-pop  rounded-lg`}
              >
                4
              </button>
              <button
                disabled={input === "Error!"}
                name='5'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } py-2 font-bold font-pop  rounded-lg`}
              >
                5
              </button>
              <button
                disabled={input === "Error!"}
                name='6'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } py-2 font-bold font-pop rounded-lg`}
              >
                6
              </button>
              <button
                disabled={input === "Error!"}
                name='+'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } py-2 font-bold font-pop  rounded-lg`}
              >
                +
              </button>
              <button
                disabled={input === "Error!"}
                name='1'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } py-2 font-bold font-pop  rounded-lg`}
              >
                1
              </button>
              <button
                disabled={input === "Error!"}
                name='2'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } py-2 font-bold font-pop rounded-lg`}
              >
                2
              </button>
              <button
                disabled={input === "Error!"}
                name='3'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } py-2 font-bold font-pop rounded-lg`}
              >
                3
              </button>
              <button
                disabled={input === "Error!"}
                name='-'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } py-2 font-bold font-pop rounded-lg`}
              >
                -
              </button>
              <button
                disabled={input === "Error!"}
                name='.'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } py-2 font-bold font-pop rounded-lg`}
              >
                .
              </button>
              <button
                disabled={input === "Error!"}
                name='0'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } py-2 font-bold font-pop rounded-lg`}
              >
                0
              </button>
              <button
                disabled={input === "Error!"}
                name='/'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } py-2 font-bold font-pop rounded-lg`}
              >
                /
              </button>
              <button
                disabled={input === "Error!"}
                name='*'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } py-2 font-bold font-pop rounded-lg`}
              >
                x
              </button>
              <button
                onClick={resetHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } p-2 font-bold font-pop col-span-2 rounded-lg xs:text-xl text-base`}
              >
                RESET
              </button>
              <button
                disabled={input === "Error!"}
                onClick={calculateHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } p-2 font-bold font-pop col-span-2 rounded-lg `}
              >
                =
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
