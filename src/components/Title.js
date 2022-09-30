import React from "react";

const Title = ({ theme }) => {
  return (
    <div>
      <div
        className={`${
          theme === "2" ? "d-color2" : theme === "3" ? "d-color3" : "text-white"
        }  xs:text-[2rem] font-pop font-bold`}
      >
        calc
      </div>
    </div>
  );
};

export default Title;
