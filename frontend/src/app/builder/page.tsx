import Header from "@/components/Header";
import ConstructorModule from "./components/ConstructorModule";

export default function Builder() {
  return (
    <main className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="absolute top-5 left-0 w-full flex items-center justify-center text-lg text-neutral-900">Конструктор</div>
      </Header>
      
      <div className="l:w-700 overflow-y-auto bg-black ml-[100px] mr-[100px] h-screen  flex flex-col items-center justify-center text-center">
        <ConstructorModule title={"Глава 1"}/>
      </div>
    </main>
  );
}