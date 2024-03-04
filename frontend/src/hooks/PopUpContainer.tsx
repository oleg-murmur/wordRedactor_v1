import ButtonAddInput from '@/components/builderComponents/ButtonAddInput';
import React, { useState } from 'react'


interface ButtonPopUp {
    title: string;
    isActive: boolean;
    setIsActive: (isActive: (isActive: boolean) => boolean) => void;
    component: JSX.Element;
}

export interface ConstructorComponentsProps {
    advice: string;
    type: string;
    component: JSX.Element;
    // list:[] // list: ['test']
  }


const PopUpContainer: React.FC<ButtonPopUp> = React.memo(({title,isActive,setIsActive,component}) => {

    const [ConstructorComponentsList, setConstructorComponentsList] = useState<ConstructorComponentsProps[]>([
        {
          type: "addParagraph", 
          component: component, 
          advice: 'введите содержание первого абзаца'
        }, 
      ]);
    
      const selectElement= (objectConstructorComponent: ConstructorComponentsProps) => {
        setConstructorComponentsList([...ConstructorComponentsList, objectConstructorComponent])
      }

    return (
        <>
        {isActive && (
        <>
          {ConstructorComponentsList.map((mass: { type: string,component: JSX.Element, advice: string }) => 
        <div className="pl-[50px]" key={Math.random()}>
          {mass.advice}
          {mass.component}
        </div>
      ) }
        <div className="inline-flex flex-col gap-2">
          <ButtonAddInput  advice={'скопируйте сюда первый абзац'}  component={component} func={selectElement} key={"addParagraph"}  type={"addParagraph"} title={"Добавить абзац"}/>
         </div>
      </>
      )}
      </>
      )
})

export default PopUpContainer
