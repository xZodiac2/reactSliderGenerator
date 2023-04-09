import React from 'react'
import { Link } from 'react-router-dom'

export default function BeforeSlidesFIlling() {
    return (
        <div className='container'>
            <h1>Отлично, далше надо будет указать контент для каждого слайда</h1>
            <Link to='/fillSlides'>Начать</Link>
        </div>
    )
}
