import React, { useState } from 'react'
import TitleInput from '../TitleInputComponent'
import ParagraphConstructorItem from './ParagraphConstructorItem';
import { ConstructorComponentsProps } from '../../FileSections/TitleBlock';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import ButtonAddInput from '../ButtonAddInput';
import ImageConstructorItem from './ImageConstructorItem';
interface TitleChapterProps {
    type?: string;
    title: string
  }

const SubChapterConstructorItem: React.FC<TitleChapterProps> = ({title}) => {

    const [isActive, setIsActive] = useState(false);

    const [ConstructorComponentsList, setConstructorComponentsList] = useState<ConstructorComponentsProps[]>([

        // {type: "addChapter", component: <SubChapterConstructorItem/>, advice: 'введите название первой главы'}, 
        {type: "addParagraph", component: <ParagraphConstructorItem/>, advice: 'введите содержание первого абзаца'}, 
      ])
      
    const handleClick = () => {
        setIsActive((prev) => !prev);
      };
      const selectElement= (objectConstructorComponent: ConstructorComponentsProps) => {
        setConstructorComponentsList([...ConstructorComponentsList, objectConstructorComponent])
      }
    
      
    return (
        <>
        <div className="relative">
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
            <div className="absolute top-0 left-0">
                <TitleInput width={'200px'} title={''} placeholder={'название подглавы'}/>
            </div>
    
        </div>

      
        {isActive && (
          <>
            {ConstructorComponentsList.map((mass: { type: string,component: JSX.Element, advice: string }) => 
          <div className="pl-[100px]" key={Math.random()}>
            {mass.advice}
            {mass.component}
          </div>
        ) }
          <div className="inline-flex flex-col gap-2">
            <ButtonAddInput  advice={'введите сод абзаца'} component={<ParagraphConstructorItem/>} func={selectElement} key={"addParagraph"}  type={"addParagraph"} title={"Добавить абзац"}/>
            <ButtonAddInput  advice={'введние название подглавы'} component={<ImageConstructorItem/>} func={selectElement} key={"addSubChapter"}  type={"addSubChapter"} title={"Добавить картинку"}/>
          </div>
        </>
        )}
      </>
    )
}

export default SubChapterConstructorItem
