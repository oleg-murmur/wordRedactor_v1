"use client"
import { Dispatch, SetStateAction } from "react";
import { ConstructorComponentsProps } from "./TitleBlock";

interface ButtonProps {
  type: string;
  title: string;
  func: (objectConstructorComponent: ConstructorComponentsProps) => void;
  component: JSX.Element;
  advice: string;
}

const ButtonAddInput: React.FC<ButtonProps> = ({ component,type, title, advice, func }) => {
  
  const handleButtonClick = () => {
    func({type: type, advice: advice, component})
  };
  return (
    <>
      <button
        onClick={handleButtonClick}
        className="bg-green-600 p-1 w-[250px] text-xs font-semibold text-neutral-800 cursor-pointer hover:text-neutral-700 rounded-lg"
      >
        {title}
      </button>
      
    </>
  );
};

export default ButtonAddInput;
