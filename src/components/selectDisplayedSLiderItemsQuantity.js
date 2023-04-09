import React from "react";
import { Link } from "react-router-dom";

export default function SelectDisplayedSLiderItemsQuantity({sendToParentDisplayedSliderItemsQuantity}) {

    let displayedSliderItemsQuantity



    function setDisplayedSliderItemsQuantity(event) {
        displayedSliderItemsQuantity = event.target.value
    }

    function sendDisplayedSliderItemsQuantity() {
        if (typeof displayedSliderItemsQuantity === 'undefined' || displayedSliderItemsQuantity === '0') {
            sendToParentDisplayedSliderItemsQuantity(undefined)
            return
        }

        sendToParentDisplayedSliderItemsQuantity(Number(displayedSliderItemsQuantity))
    }

    return (
        <div className="container">
            <div className="form">
                <form>
                    <h1>Итак, теперь выберите количетство слайдов которые будут отображаться</h1>
                    <input type="text" placeholder="Количетсво отображаемых слайдов" onChange={setDisplayedSliderItemsQuantity}/>
                    <Link onClick={sendDisplayedSliderItemsQuantity} to='/beforeSlidesFilling'>Выбрать</Link>
                </form>
            </div>
        </div>
    )
}
