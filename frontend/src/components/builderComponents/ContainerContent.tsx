"use client";
import TitleBlock from "./TitleBlock";

interface Title {
  type: string;
  title: string;
}

const ContainerContent = () => {
  const title: Title[] = [
    { type: "addTitleList", title: "Титульный лист" },
    { type: "addAssignment", title: "Задание преподавателя" },
    { type: "addAbstract", title: "Реферат" },
    { type: "addChapter", title: "Главы" },
    { type: "addConclusion", title: "Заключение" },
    { type: "addSources", title: "Источники" }
  ];
    
  return (
    <div  className="flex justify-start w-[500px] ">
      <div className="inline-flex flex-col gap-2 "
      >
        {title.map((e) => (
            <TitleBlock key={e.type} type={e.type} title={e.title}/>
        ))}
      </div>
    </div>
  );
};

export default ContainerContent;
