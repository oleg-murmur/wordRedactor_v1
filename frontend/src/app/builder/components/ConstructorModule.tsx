import TitleInput from '@/components/TitleInput';
import React from 'react'

export interface ConstructorProps {
    title: string;
}

const ConstructorModule = ({title}:ConstructorProps) => {

    return (
        <div className="p-6 m-3 bg-white rounded-xl shadow-lg flex  space-x-4">
            <div className='items-start flex flex-col '>
                <div className="text-l text-black">{title}</div>
                <TitleInput title={title} placeholder={"Введите название главы"}/>
            </div>
        </div>
    )
}

export default ConstructorModule
