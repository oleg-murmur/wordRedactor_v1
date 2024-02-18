"use client"
import React, { useEffect, useState } from 'react'

export interface TitleInputProps {
    title: string;
    placeholder?: string;
    width?: string
    height?: string
}

const TitleInput = ({title,height,placeholder, width}:TitleInputProps) => {

    const [text, setText] = useState('');
    const [savedText, setSavedText] = useState('');

    useEffect(() => {
      const timer = setTimeout(() => {
        setSavedText(text);

        console.log('Сохраняю данные:', text);
      }, 1500); 

      return () => {
        clearTimeout(timer);
      };
    }, [text]);

    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setText(e.target.value);
    }

    return (
        <input 
            value={text} 
            onChange={handleInputChange}
            type='text' 
            placeholder={placeholder}
            style={{
              width: `${width}`,height: `${height}`}}

            className={`
                outline-none border 
                border-gray-300 
                text-gray-600 
                text-sm rounded-lg 
                p-2 bg-gray-50
                hover:border-gray-500 
                focus:border-2 
                focus:ring-blue-400 
                focus:border-blue-400 
                duration-200` 
    }
        />
    )
}

export default TitleInput