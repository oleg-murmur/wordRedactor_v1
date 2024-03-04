import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

interface ButtonPopUp {
    title: string;
    isActive: boolean;
    setIsActive: (isActive: (isActive: boolean) => boolean) => void;
}


const ButtonPopUpHook: React.FC<ButtonPopUp> = ({setIsActive,isActive,title}) => {

    const handleClick = () => {
        setIsActive((isActive:boolean) => !isActive);
      };

    return (
        <button
        onClick={handleClick}
        className="bg-neutral-600 p-2 rounded-sm w-[300px] text-left relative cursor-pointer rounded-md"
      >
        {title}
        {isActive ? (
        <BsChevronUp className="absolute top-[8px] right-[8px]" size={25} />
      ) : (
        <BsChevronDown className="absolute top-[8px] right-[8px]" size={25}/>
      )}
      </button>
    )
}

export default ButtonPopUpHook
