import React from "react";

const BtnSecondary = ({ text, Bwith, Bheigth, Btext }) => {
  return (
    <button
      className={`
      ${Bwith ? Bwith : "w-44"}
      ${Bheigth ? Bheigth : "h-9"}
      ${Btext ? Btext : "text-2xl"} 
      mt-4 rounded-md bg-redCancel text-slate-200 font-medium shadow-btn`}
    >
      {text}
    </button>
  );
};

export { BtnSecondary };
