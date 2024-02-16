import Header from "@/components/Header";
import BuilderContent from "./components/BuilderContent";

export default function Builder() {
  return (
    <main className="rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="absolute top-5 left-0 w-full flex items-center justify-center text-lg text-neutral-900">Конструктор</div>
      </Header>
      <BuilderContent/>
    </main>
  );
}