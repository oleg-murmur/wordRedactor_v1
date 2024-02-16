"use client";

import ContainerContent from "@/components/builderComponents/ContainerContent";

const BuilderContent = () => {
  return (
    <div className="flex gap-2 justify-between mt-[50px] w-full h-full ">
        <div>1 block content</div>
        <ContainerContent/>
        <div>3 block content</div>
    </div>
  )
}

export default BuilderContent