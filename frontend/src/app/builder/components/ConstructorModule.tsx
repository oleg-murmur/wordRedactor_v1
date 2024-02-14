import React from 'react'

export interface ConstructorProps {
    title: string;

}

const ConstructorModule = ({title}:ConstructorProps) => {
    return (
        <div className="xl:w-100 p-6 m-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex  space-x-4">
            <div className='items-start flex flex-col '>
                <div className="text-l text-black">{title}</div>
                <input type='text' className="shadow-lg p-2 rounded-lg" placeholder="Title name"/>
            </div>
        </div>
    )
}

export default ConstructorModule
