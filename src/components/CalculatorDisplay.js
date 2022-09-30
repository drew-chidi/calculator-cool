import React from "react";

const CalculatorDisplay = ({ theme, memory, operator, input }) => {
  let value;
  if (memory && input === "") {
    value = memory;
  } else {
    value = input;
  }
  return (
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
            {/* {memory}
            {operator} */}
          </label>
          <input
            disabled
            type='text'
            value={value}
            className={`${
              theme === "2"
                ? "d-color2 s-bg2"
                : theme === "3"
                ? "d-color3 s-bg3"
                : "text-white s-bg1"
            } sm:text-5xl text-3xl font-pop font-bold w-full h-14 sm:h-20 rounded-xl mb-6 text-right p-4 xs:p-6`}
          />
        </div>
      </div>
    </section>
  );
};

export default CalculatorDisplay;
