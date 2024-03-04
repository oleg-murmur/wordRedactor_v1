import React, { useState } from 'react'
import ButtonAddInput from '../builderComponents/ButtonAddInput';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import ParagraphConstructorItem from '../builderComponents/addButtonComponents/ParagraphConstructorItem';
import ButtonPopUpHook from '@/hooks/ButtonPopUpHook';
import PopUpContainer from '@/hooks/PopUpContainer';

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


const Abstract: React.FC<TitleBlockProps> = ({ type, title }) => {

    const [isActive, setIsActive] = useState(false);


  const [ConstructorComponentsList, setConstructorComponentsList] = useState<ConstructorComponentsProps[]>([
    {
      type: "addParagraph", 
      component: <ParagraphConstructorItem/>, 
      advice: 'введите содержание первого абзаца'
    }, 
  ]);


  return (
    <div className="">
      <ButtonPopUpHook title={title} isActive={isActive} setIsActive={setIsActive}/>

      <PopUpContainer title={''} isActive={isActive} setIsActive={setIsActive} component={<ParagraphConstructorItem/>}/>

    </div>
  );
}

export default Abstract
