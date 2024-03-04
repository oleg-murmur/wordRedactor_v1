import React from 'react'
import TitleInput from '../TitleInputComponent'

const ParagraphConstructorItem = React.memo(() => {
    return (
        <div>
            <TitleInput title={''} placeholder={'Абзац'}/>
        </div>
    )
})

export default ParagraphConstructorItem
