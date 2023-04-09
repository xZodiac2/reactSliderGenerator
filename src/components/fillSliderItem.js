import React, {useState, useEffect} from 'react'

export default function FillSliderItem({slideIndex, sendToParentSlideContent, sendToParentComponentStatus}) {

    let slideHeader
    let slideBody

    const [status, setStatus] = useState('Не сохранено')
    const [statusColor, setStatusColor] = useState('red')

    function setSlideHeader(event) {
        slideHeader = event.target.value
    }

    function setSlideBody(event) {
        slideBody = event.target.value
    }

    function setComponentStatus() {
        setStatus('Сохранено')
        setStatusColor('#f5f5f5')
        sendToParentSlideContent({header: slideHeader, body: slideBody, index: slideIndex})
    }

    useEffect(() => {
        setTimeout(() => {
            sendToParentComponentStatus(status, slideIndex)
        }, 100)
    })


    return (
        <div className="fill-slide">
            <h1>Контент слайда {slideIndex + 1} </h1>
            <div className="fill-slide-form">
                <input type="text" placeholder='Введите заголовок слайда' onChange={setSlideHeader}/>
                <textarea placeholder='Введите текст слайда' onChange={setSlideBody}></textarea>
                <h5 style={{ color: statusColor, margin: 0}}> {status} </h5>
                <a onClick={setComponentStatus}>Сохранить</a>
            </div>
        </div>
    )
}
