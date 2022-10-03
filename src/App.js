import { useState, useEffect } from "react";
import CalculatorDisplay from "./components/CalculatorDisplay";
import Header from "./components/Header";
import Button from "./components/UI/Button";

function App() {
  // ##Theme State##
  const [theme, setTheme] = useState("1");

  // ##Input Display State##
  const [input, setInput] = useState("");

  // ##Memory State
  const [memory, setMemory] = useState("");

  // Operators State
  const [operator, setOperator] = useState("");

  const [calculated, setCalculated] = useState(false);

  // ##Effect##
  useEffect(() => {
    const currentTheme = localStorage.getItem("themes");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  // ##Theme Handler Function##
  const setThemeHandler = (e) => {
    setTheme(e);
    localStorage.setItem("themes", e);
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
  const setKeyInputHandler = (e) => {
    // let inputDigit = e;
    // console.log(inputDigit);
    // console.log(typeof e);
    if (e === "." && input.includes(".")) return;
    // console.log(calculated);
    if (calculated) {
      setInput(e);
      setCalculated(false);
    } else {
      setInput(input.concat(e));
    }
  };

  console.log(input);
  console.log(typeof input);

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
    setOperator(e);
  };

  // Equals
  const equalsHandler = () => {
    let value = computeHandler();
    if (value === undefined || value === null) return;
    setInput(value.toString());
    setMemory("");
    setOperator("");
    setCalculated(true);
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
      <div className='max-w-[375px] md:max-w-[50%] xl:max-w-[100%]'>
        <Header theme={theme} setThemeHandler={setThemeHandler} />
        <main>
          <div className='flex flex-col w-full '>
            {/* Calculator Display */}
            <CalculatorDisplay
              theme={theme}
              memory={memory}
              operator={operator}
              input={input}
            />
            <div
              className={`${
                theme === "3" ? "t-bg3" : theme === "2" ? "t-bg2" : "t-bg1"
              } grid grid-cols-4 gap-3 xs:text-[2rem] p-4 xs:p-6 rounded-xl`}
            >
              <Button
                id='7'
                input={input}
                name='7'
                setKeyInputHandler={setKeyInputHandler}
                theme={theme}
              />
              <Button
                id='8'
                input={input}
                name='8'
                setKeyInputHandler={setKeyInputHandler}
                theme={theme}
              />
              <Button
                id='9'
                input={input}
                name='9'
                setKeyInputHandler={setKeyInputHandler}
                theme={theme}
              />
              <Button
                id='backspace'
                input={input}
                name='DEL'
                deleteKeyHandler={deleteKeyHandler}
                theme={theme}
              />
              <Button
                id='4'
                input={input}
                name='4'
                setKeyInputHandler={setKeyInputHandler}
                theme={theme}
              />
              <Button
                id='5'
                input={input}
                name='5'
                setKeyInputHandler={setKeyInputHandler}
                theme={theme}
              />
              <Button
                id='6'
                input={input}
                name='6'
                setKeyInputHandler={setKeyInputHandler}
                theme={theme}
              />
              <Button
                id='op'
                input={input}
                name='+'
                operatorHandler={operatorHandler}
                theme={theme}
              />
              <Button
                id='1'
                input={input}
                name='1'
                setKeyInputHandler={setKeyInputHandler}
                theme={theme}
              />
              <Button
                id='2'
                input={input}
                name='2'
                setKeyInputHandler={setKeyInputHandler}
                theme={theme}
              />
              <Button
                id='3'
                input={input}
                name='3'
                setKeyInputHandler={setKeyInputHandler}
                theme={theme}
              />
              <Button
                id='op'
                input={input}
                name='-'
                operatorHandler={operatorHandler}
                theme={theme}
              />
              <Button
                id='.'
                input={input}
                name='.'
                setKeyInputHandler={setKeyInputHandler}
                theme={theme}
              />
              <Button
                id='0'
                input={input}
                name='0'
                setKeyInputHandler={setKeyInputHandler}
                theme={theme}
              />
              <Button
                id='op'
                input={input}
                name='/'
                operatorHandler={operatorHandler}
                theme={theme}
              />
              <Button
                id='op'
                input={input}
                name='*'
                operatorHandler={operatorHandler}
                theme={theme}
              />
              <Button
                id='reset'
                input={input}
                name='RESET'
                resetHandler={resetHandler}
                theme={theme}
              />
              <Button
                id='='
                input={input}
                name='='
                equalsHandler={equalsHandler}
                theme={theme}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
