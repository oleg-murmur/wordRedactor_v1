"use client"
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import ButtonAddInput from "./ButtonAddInput";

interface TitleBlockProps {
  type: string;
  title: string
}

interface ButtonName {
  title: string;
  type: string;
}

const TitleBlock: React.FC<TitleBlockProps> = ({ type, title }) => {
  const [isActive, setIsActive] = useState(false);

  const button: ButtonName[] = [
    { type: "addChapter", title: "Добавить главу" },
    { type: "addSubChapter", title: "Добавить подглаву" },
    { type: "addParagraph", title: "Добавить абзац" },
    { type: "addImage", title: "Добавить изображение" },
  ];
  
  const handleClick = () => {
    setIsActive((prev) => !prev);
  };


  return (
    <>
      <button
        onClick={handleClick}
        className="bg-neutral-600 p-2 rounded-sm w-[300px] text-left relative cursor-pointer"
      >
        {title}
        {isActive ? (
        <BsChevronUp className="absolute top-[8px] right-[8px]" size={25} />
      ) : (
        <BsChevronDown className="absolute top-[8px] right-[8px]" size={25} />
      )}
      </button>
      
      {isActive && (
        <div className="inline-flex flex-col gap-2">
          {button.map((e) => (
            <ButtonAddInput key={e.type}  type={e.type} title={e.title}/>
          ))}
          
          
        </div>
      )}
    </>
  );
};

export default TitleBlock;
