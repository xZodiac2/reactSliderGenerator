import React from 'react'
import { Link } from 'react-router-dom'

export default function SelectSlierItemsQuantity({sendToParentSliderItemsQuantity}) {

    let sliderItemsQuantity

    function setSliderItemsQuantity(event) {
        sliderItemsQuantity = event.target.value
    }

    function sendSliderItemsQuantity() {
        if (typeof sliderItemsQuantity === 'undefined' || sliderItemsQuantity === '0') {
            sendToParentSliderItemsQuantity(undefined)
            return
        }

        sendToParentSliderItemsQuantity(Number(sliderItemsQuantity))
    }

    return (
        <div className="container">
            <div className="form">
                <form>
                    <h1>Вас приветсвует генератор слайдеров! <br /> Для начала выберите количество слайдов</h1>
                    <input type="text" placeholder='Выберите количество слайдов' onChange={setSliderItemsQuantity}/>
                    <Link onClick={sendSliderItemsQuantity} to='/selectDisplayedSLiderItemsQuantity'>Выбрать</Link>
                </form>
            </div>
        </div>
    )
}
