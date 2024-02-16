"use client";

interface ButtonProps {
  type: string;
  title: string;
}

const ButtonAddInput: React.FC<ButtonProps> = ({ type, title }) => {
  
  const handleButtonClick = () => {
    // Ваша логика обработки нажатия на кнопку
  };
  return (
    <>
      <button
        onClick={handleButtonClick}
        className="bg-green-600 p-1 w-[250px] text-xs font-semibold text-neutral-800 cursor-pointer hover:text-neutral-700 rounded-lg"
      >
        {title}
      </button>
      
    </>
  );
};

export default ButtonAddInput;
