"use client"
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactComponentElement, ReactElement, ReactNode, ReactPortal, useEffect, useMemo, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import ButtonAddInput from "./ButtonAddInput";
import TitleInput from "./TitleInputComponent";
import ParagraphConstructorItem from "./addButtonComponents/ParagraphConstructorItem";
import ChapterConstructorItem from "./addButtonComponents/ChapterConstructorItem";
import SubChapterConstructorItem from "./addButtonComponents/SubChapterConstructorItem";
import ImageConstructorItem from "./addButtonComponents/ImageConstructorItem";

interface TitleBlockProps {
  type: string;
  title: string
}

// interface ButtonName {
//   title: string;
//   type: string;
// }
export interface ConstructorComponentsProps {
  advice: string;
  type: string;
  component: JSX.Element;
  // list:[] // list: ['test']
}

const TitleBlock: React.FC<TitleBlockProps> = ({ type, title }) => {
  const [isActive, setIsActive] = useState(false);


  const [ConstructorComponentsList, setConstructorComponentsList] = useState<ConstructorComponentsProps[]>([

    {type: "addChapter", component: <ChapterConstructorItem type={"123"} title={"321"}/>, advice: 'введите название первой главы'}, 
    // {type: "addParagraph", component: <ParagraphConstructorItem/>, advice: 'введите содержание первого абзаца'}, 
  ]);


  // const button: ButtonName[] = [
  //   { type: "addChapter", title: "Добавить главу" },
  //   { type: "addSubChapter", title: "Добавить подглаву" },
  //   { type: "addParagraph", title: "Добавить абзац" },
  //   { type: "addImage", title: "Добавить изображение" },
  // ];
  
  const handleClick = () => {
    setIsActive((prev) => !prev);
  };
// useEffect(()=> {

// },[])

  const selectElement= (objectConstructorComponent: ConstructorComponentsProps) => {
    setConstructorComponentsList([...ConstructorComponentsList, objectConstructorComponent])
  }

  return (
    <div className="">
      <button
        onClick={handleClick}
        className="bg-neutral-600 p-2 rounded-sm w-[300px] text-left relative cursor-pointer rounded-md"
      >
        {title}
        {isActive ? (
        <BsChevronUp className="absolute top-[8px] right-[8px]" size={25} />
      ) : (
        <BsChevronDown className="absolute top-[8px] right-[8px]" size={25} />
      )}
      </button>
    
      {isActive && (
        <>
          {ConstructorComponentsList.map((mass: { type: string,component: JSX.Element, advice: string }) => 
        <div className="pl-[50px]" key={Math.random()}>
          {mass.advice}
          {mass.component}
        </div>
      ) }
        <div className="inline-flex flex-col gap-2">
          <ButtonAddInput  advice={'введите название главы'}  component={<ChapterConstructorItem type={"123"} title={"321"}/>} func={selectElement} key={"addChapter"}  type={"addChapter"} title={"Добавить главу"}/>
         </div>
      </>
      )}
    </div>
  );
};
export default TitleBlock