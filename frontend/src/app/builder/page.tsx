import Header from "@/components/Header";
import ConstructorModule from "./components/ConstructorModule";

export default function Builder() {
  return (
    <main className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="absolute top-5 left-0 w-full flex items-center justify-center text-lg text-neutral-900">Конструктор</div>
      </Header>
      <div className="overflow-y-auto  ml-[200px] mr-[200px] h-screen  flex flex-col items-center justify-center text-center">
        <ConstructorModule title={"Глава 1"}/>
        <ConstructorModule title={"Глава 1"}/>
        <ConstructorModule title={"Глава 1"}/>

      </div>
    </main>
  );
}