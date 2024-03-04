import React, { useState } from 'react'
import ParagraphConstructorItem from '../builderComponents/addButtonComponents/ParagraphConstructorItem';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import ButtonAddInput from '../builderComponents/ButtonAddInput';
import ButtonPopUpHook from '@/hooks/ButtonPopUpHook';

interface TitleBlockProps {
    type: string;
    title: string
  }
export interface ConstructorComponentsProps {
    advice: string;
    type: string;
    component: JSX.Element;
    // list:[] // list: ['test']
  }

  
const Conclusion: React.FC<TitleBlockProps> = ({ title }) => {
    const [isActive, setIsActive] = useState(false);


  const [ConstructorComponentsList, setConstructorComponentsList] = useState<ConstructorComponentsProps[]>([

    {type: "addParagraph", component: <ParagraphConstructorItem/>, advice: 'введите содержание первого абзаца'}, 
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

  const selectElement= (objectConstructorComponent: ConstructorComponentsProps) => {
    setConstructorComponentsList([...ConstructorComponentsList, objectConstructorComponent])
  }

  return (
    <div className="">
    <ButtonPopUpHook title={title} isActive={isActive} setIsActive={setIsActive}/>
    
      {isActive && (
        <>
          {ConstructorComponentsList.map((mass: { type: string,component: JSX.Element, advice: string }) => 
        <div className="pl-[50px]" key={Math.random()}>
          {mass.advice}
          {mass.component}
        </div>
      ) }
        <div className="inline-flex flex-col gap-2">
          <ButtonAddInput  advice={'скопируйте сюда первый абзац'}  component={<ParagraphConstructorItem/>} func={selectElement} key={"addParagraph"}  type={"addParagraph"} title={"Добавить абзац"}/>
         </div>
      </>
      )}
    </div>
  );
}

export default Conclusion
