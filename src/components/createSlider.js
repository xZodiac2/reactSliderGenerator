import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateSlider() {
    return (
        <div className="slider-ready-container">
            <h1>Слайдер готов! Посмотреть его можно перейдя по кнопке ниже</h1>
            <Link to="/slider">Посмотреть слайдер</Link>
        </div>
    )
}
