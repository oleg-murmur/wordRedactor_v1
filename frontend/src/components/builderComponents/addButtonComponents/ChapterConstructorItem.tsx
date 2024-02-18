import React, { useState } from 'react'
import TitleInput from '../TitleInputComponent'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import ButtonAddInput from '../ButtonAddInput';
import { ConstructorComponentsProps } from '../TitleBlock';
import ParagraphConstructorItem from './ParagraphConstructorItem';
import SubChapterConstructorItem from './SubChapterConstructorItem';
import ImageConstructorItem from './ImageConstructorItem';

interface TitleChapterProps {
    type: string;
    title: string
  }

  
const ChapterConstructorItem: React.FC<TitleChapterProps> = ({title}) => {
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
        <div className="relative ">
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
                <TitleInput width={'200px'} title={''} placeholder={'название главы'}/>
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
            {/* {button.map((e) => (
              <ButtonAddInput  func={selectElement} key={e.type}  type={e.type} title={e.title}/>
            ))} */}
            {/* <ButtonAddInput  advice={'введите название главы'}  component={<ChapterConstructorItem type={"123"} title={"321"}/>} func={selectElement} key={"addChapter"}  type={"addChapter"} title={"Добавить главу"}/> */}
            <ButtonAddInput  advice={'введите сод абзаца'} component={<ParagraphConstructorItem/>} func={selectElement} key={"addParagraph"}  type={"addParagraph"} title={"Добавить абзац"}/>
            <ButtonAddInput  advice={'введите название подглавы'} component={<SubChapterConstructorItem title={'название подглавы'}/>} func={selectElement} key={"addSubChapter"}  type={"addSubChapter"} title={"Добавить подглаву"}/>
            <ButtonAddInput  advice={'загрузите картинку'} component={<ImageConstructorItem/>} func={selectElement} key={"addImage"}  type={"addImage"} title={"Добавить картину"}/>
          </div>
        </>
        )}
      </>
    )
}

export default ChapterConstructorItem
