import React from "react"
import { Link } from "react-router-dom"


export default function SLiderError() {
    return (
        <div className="container" style={{padding: '0 20px'}}>
            <h1>При перезагрузке страницы были утеряны все данные слайдера. Пожалуйста, введите их заново и больше не перезагружайте страницу)</h1>
            <Link to='/'>Назад</Link>
        </div>
    )
}
