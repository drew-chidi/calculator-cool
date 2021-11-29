import { useState, useEffect } from "react";

function App() {
  // ##Theme State##
  const [theme, setTheme] = useState("1");

  // ##Input Display State##
  const [input, setInput] = useState("");

  // ##Memory State
  const [memory, setMemory] = useState("");

  // Operators State
  const [operator, setOperator] = useState("");

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

  // ##Delete Key Handler##
  const deleteKeyHandler = () => {
    setInput(String(input).slice(0, -1));
  };

  // ##Reset Function##
  const resetHandler = () => {
    setInput("");
    setMemory("");
    setOperator("");
    return;
  };

  // Key Handler
  const keyInputHandler = (e) => {
    const value = e.target.name;
    if (value === "." && input.includes(".")) return;
    setInput(input.concat(value));
  };

  // Operator Handler
  const operatorHandler = (e) => {
    if (input === "") return;
    if (memory !== "") {
      let value = computeHandler();
      setMemory(value);
    } else {
      setMemory(input);
    }
    setInput("");
    setOperator(e.target.name);
  };
  console.log(memory);
  console.log(operator);
  console.log(input);
  // Equals
  const equalsHandler = () => {
    let value = computeHandler();
    if (value === undefined || value === null) return;
    setInput(value);
    setMemory("");
    setOperator("");
  };

  // Compute Handlers
  const computeHandler = () => {
    let result;
    let previousNumber = parseFloat(memory);
    let currentNumber = parseFloat(input);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operator) {
      case "/":
        result = previousNumber / currentNumber;
        break;
      case "*":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
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
            <div>
              <label
                className={`${
                  theme === "2"
                    ? "d-color2"
                    : theme === "3"
                    ? "d-color3"
                    : "text-white"
                } text-xs md:text-base flex w-full justify-end px-1`}
              >
                {memory}
                {operator}
              </label>

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
                } sm:text-5xl text-3xl font-pop font-bold w-full h-14 sm:h-20 rounded-xl mb-6 text-right p-4 xs:p-6`}
              />
            </div>
            {/* <label className='w-full'>
              {" "}
              <p className='text-right'>
                {memory}
                {operator}
              </p>
            </label>

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
              } sm:text-5xl text-3xl font-pop font-bold w-full h-14 sm:h-20 rounded-xl mb-6 text-right p-4 xs:p-6`}
            /> */}
            {/* Keypad */}
            <div
              className={`${
                theme === "3" ? "t-bg3" : theme === "2" ? "t-bg2" : "t-bg1"
              } grid grid-cols-4 gap-3 xs:text-[2rem] p-4 xs:p-6 rounded-xl`}
            >
              <button
                id='7'
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
                id='8'
                disabled={input === "Error!"}
                name='8'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop rounded-lg`}
              >
                8
              </button>
              <button
                id='9'
                disabled={input === "Error!"}
                name='9'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop rounded-lg`}
              >
                9
              </button>
              <button
                disabled={input === "Error!"}
                id='backspace'
                name='del'
                onClick={deleteKeyHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } xs:text-xl text-base font-bold font-pop rounded-lg`}
              >
                DEL
              </button>
              <button
                id='4'
                disabled={input === "Error!"}
                name='4'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop  rounded-lg`}
              >
                4
              </button>
              <button
                id='5'
                disabled={input === "Error!"}
                name='5'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop  rounded-lg`}
              >
                5
              </button>
              <button
                id='6'
                disabled={input === "Error!"}
                name='6'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop rounded-lg`}
              >
                6
              </button>
              <button
                id='op'
                disabled={input === "Error!"}
                name='+'
                onClick={operatorHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop  rounded-lg`}
              >
                +
              </button>
              <button
                id='7'
                disabled={input === "Error!"}
                name='1'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop  rounded-lg`}
              >
                1
              </button>
              <button
                id='7'
                disabled={input === "Error!"}
                name='2'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop rounded-lg`}
              >
                2
              </button>
              <button
                id='7'
                disabled={input === "Error!"}
                name='3'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop rounded-lg`}
              >
                3
              </button>
              <button
                id='op'
                disabled={input === "Error!"}
                name='-'
                onClick={operatorHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop rounded-lg`}
              >
                -
              </button>
              <button
                id='7'
                disabled={input === "Error!"}
                name='.'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop rounded-lg`}
              >
                .
              </button>
              <button
                id='7'
                disabled={input === "Error!"}
                name='0'
                onClick={keyInputHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop rounded-lg`}
              >
                0
              </button>
              <button
                id='op'
                disabled={input === "Error!"}
                name='/'
                onClick={operatorHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop rounded-lg`}
              >
                /
              </button>
              <button
                id='op'
                disabled={input === "Error!"}
                name='*'
                onClick={operatorHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop rounded-lg`}
              >
                x
              </button>
              <button
                onClick={resetHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop col-span-2 rounded-lg xs:text-xl text-base`}
              >
                RESET
              </button>
              <button
                disabled={input === "Error!"}
                onClick={equalsHandler}
                className={`${
                  theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
                } font-bold font-pop col-span-2 rounded-lg `}
              >
                =
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
  // return (
  //   <div
  //     className={`${
  //       theme === "1" ? "m-bg1" : theme === "2" ? "m-bg2" : "m-bg3"
  //     } flex items-center justify-center p-6 xl:py-20 h-screen w-screen`}
  //   >
  //     {/* Calculator Container */}
  //     <div className='max-w-[375px] md:max-w-[50%] xl:max-w-[100%]'>
  //       {/* Theme Changer, Header */}
  //       <header className='flex justify-between mb-7'>
  //         <div
  //           className={`${
  //             theme === "2"
  //               ? "d-color2"
  //               : theme === "3"
  //               ? "d-color3"
  //               : "text-white"
  //           }  xs:text-[2rem] font-pop font-bold`}
  //         >
  //           calc
  //         </div>
  //         <div>
  //           <div className='flex flex-col items-end'>
  //             <div
  //               className={`${
  //                 theme === "2"
  //                   ? "d-color2"
  //                   : theme === "3"
  //                   ? "d-color3"
  //                   : "text-white"
  //               } flex font-pop font-bold xs:text-xl`}
  //             >
  //               <p className='mx-2.5'>1</p>
  //               <p className='mx-2.5'>2</p>
  //               <p className='mx-2.5'>3</p>
  //             </div>
  //           </div>
  //           <div className='flex items-center'>
  //             <p
  //               className={`${
  //                 theme === "2"
  //                   ? "d-color2"
  //                   : theme === "3"
  //                   ? "d-color3"
  //                   : "text-white"
  //               } text-xs xs:text-base font-pop font-bold mr-1`}
  //             >
  //               THEME
  //             </p>
  //             <div className='t-bg1 p-2 rounded-3xl text-center flex'>
  //               <button
  //                 value='1'
  //                 onClick={changeThemeHandler}
  //                 className={`${
  //                   theme === "1" && "t-key1"
  //                 } w-5 h-5  rounded-full`}
  //               ></button>
  //               <button
  //                 value='2'
  //                 onClick={changeThemeHandler}
  //                 className={`${
  //                   theme === "2" && "t-key2"
  //                 } w-5 h-5  rounded-full ml-2`}
  //               ></button>
  //               <button
  //                 value='3'
  //                 onClick={changeThemeHandler}
  //                 className={`${
  //                   theme === "3" && "t-key3"
  //                 } w-5 h-5  rounded-full ml-2`}
  //               ></button>
  //             </div>
  //           </div>
  //         </div>
  //       </header>
  //       <section>
  //         <div className='flex flex-col w-full '>
  //           {/* Calculator Display */}
  //           <label className='w-full'></label>
  //           <input
  //             disabled
  //             type='text'
  //             value={input}
  //             className={`${
  //               theme === "2"
  //                 ? "d-color2 s-bg2"
  //                 : theme === "3"
  //                 ? "d-color3 s-bg3"
  //                 : "text-white s-bg1"
  //             } text-5xl font-pop font-bold w-full h-20 rounded-xl mb-6 text-right p-4 xs:p-6`}
  //           />

  //           {/* Keypad */}
  //           <div
  //             className={`${
  //               theme === "3" ? "t-bg3" : theme === "2" ? "t-bg2" : "t-bg1"
  //             } grid grid-cols-4 gap-3 xs:text-[2rem] p-4 xs:p-6 rounded-xl`}
  //           >
  //             <button
  //               id='7'
  //               disabled={input === "Error!"}
  //               name='7'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               }  font-bold font-pop rounded-lg`}
  //             >
  //               7
  //             </button>
  //             <button
  //               id='8'
  //               disabled={input === "Error!"}
  //               name='8'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop rounded-lg`}
  //             >
  //               8
  //             </button>
  //             <button
  //               id='9'
  //               disabled={input === "Error!"}
  //               name='9'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop rounded-lg`}
  //             >
  //               9
  //             </button>
  //             <button
  //               disabled={input === "Error!"}
  //               id='backspace'
  //               onClick={deleteKeyHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } xs:text-xl text-base font-bold font-pop rounded-lg`}
  //             >
  //               DEL
  //             </button>
  //             <button
  //               id='4'
  //               disabled={input === "Error!"}
  //               name='4'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop  rounded-lg`}
  //             >
  //               4
  //             </button>
  //             <button
  //               id='5'
  //               disabled={input === "Error!"}
  //               name='5'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop  rounded-lg`}
  //             >
  //               5
  //             </button>
  //             <button
  //               id='6'
  //               disabled={input === "Error!"}
  //               name='6'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop rounded-lg`}
  //             >
  //               6
  //             </button>
  //             <button
  //               id='op'
  //               disabled={input === "Error!"}
  //               name='+'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop  rounded-lg`}
  //             >
  //               +
  //             </button>
  //             <button
  //               id='7'
  //               disabled={input === "Error!"}
  //               name='1'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop  rounded-lg`}
  //             >
  //               1
  //             </button>
  //             <button
  //               id='7'
  //               disabled={input === "Error!"}
  //               name='2'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop rounded-lg`}
  //             >
  //               2
  //             </button>
  //             <button
  //               id='7'
  //               disabled={input === "Error!"}
  //               name='3'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop rounded-lg`}
  //             >
  //               3
  //             </button>
  //             <button
  //               id='op'
  //               disabled={input === "Error!"}
  //               name='-'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop rounded-lg`}
  //             >
  //               -
  //             </button>
  //             <button
  //               id='7'
  //               disabled={input === "Error!"}
  //               name='.'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop rounded-lg`}
  //             >
  //               .
  //             </button>
  //             <button
  //               id='7'
  //               disabled={input === "Error!"}
  //               name='0'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop rounded-lg`}
  //             >
  //               0
  //             </button>
  //             <button
  //               id='op'
  //               disabled={input === "Error!"}
  //               name='/'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop rounded-lg`}
  //             >
  //               /
  //             </button>
  //             <button
  //               id='op'
  //               disabled={input === "Error!"}
  //               name='*'
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop rounded-lg`}
  //             >
  //               x
  //             </button>
  //             <button
  //               onClick={resetHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop col-span-2 rounded-lg xs:text-xl text-base`}
  //             >
  //               RESET
  //             </button>
  //             <button
  //               disabled={input === "Error!"}
  //               onClick={keyInputHandler}
  //               className={`${
  //                 theme === "3" ? "n-key3" : theme === "2" ? "n-key2" : "n-key1"
  //               } font-bold font-pop col-span-2 rounded-lg `}
  //             >
  //               =
  //             </button>
  //           </div>
  //         </div>
  //       </section>
  //     </div>
  //   </div>
  // );
}

export default App;
