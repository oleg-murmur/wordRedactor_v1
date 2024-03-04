"use client";
import Abstract from "../FileSections/Abstract";
import Assignment from "../FileSections/Assignment";
import BooksAndSources from "../FileSections/BooksAndSources";
import Conclusion from "../FileSections/Conclusion";
import TitleList from "../FileSections/TitleList";
import TitleBlock from "../FileSections/TitleBlock";

interface Title {
  type: string;
  title: string;
}

const ContainerContent = () => {
    
  return (
    <div  className="flex justify-start w-[500px] ">
      <div className="inline-flex flex-col gap-2 "
      >
        <TitleList/>
        <Assignment/>
        <Abstract  key={"addAbstract"} type={"addAbstract"} title={"Реферат"}/>
        <TitleBlock key={"addChapter"} type={"addChapter"} title={"Главы"}/>
        <Conclusion  key={"addConclusion"} type={"addConclusion"} title={"Заключение"}/>
        <BooksAndSources  key={"addSources"} type={"addSources"} title={"Источники"}/>
      </div>
    </div>
  );
};

export default ContainerContent;
