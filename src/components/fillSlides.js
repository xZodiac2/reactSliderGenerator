import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import FillSliderItem from './fillSliderItem'


export default function FillSlides({parameters, sendToParentSLiderContent}) {

    const sliderItemsQuantity = parameters.sliderItemsQuantity
    const displayedSliderItems = parameters.displayedSliderItemsQuantity
    const slidesContent = []
    let slideIndexes = []
    let statuses = []

    const [path, setPath] = useState('/fillSlides')
    const [linkContent, setlinkContent] = useState('Проверить')
    const [globalStatus, setGlobalStatus] = useState('')
    const [globalStatusColor, setGlobalStatusColor] = useState('')
    const [isContentSended, setIsConteSended] = useState(false)

    for (let i = 0; i < sliderItemsQuantity; i++) {
        slideIndexes.push(i)
    }

    function getStatuses(value, slideIndex) {
        statuses[slideIndex] = value
    }

    function getSlideContent(value) {
        slidesContent.push(value)
    }

    function isAllSaved() {
        for (let i = 0; i <= statuses.length; i++) {
            if (statuses[i] === 'Не сохранено') return false;
        }

        return true
    }

    function sendSLiderContent() {
        if (isContentSended === true) return

        sendToParentSLiderContent(slidesContent)
        setIsConteSended(true)
    }

    function setGlobalStatusAndLink() {
        if (isAllSaved()) {
            setGlobalStatus('Контент сохранён')
            setGlobalStatusColor('#f5f5f5')
            setlinkContent('Продолжить')
            setPath('/createSlider')
            sendSLiderContent()
        } else {
            setGlobalStatus('Контент не сохранён')
            setGlobalStatusColor('red')
        }
    }

    return (
        <>
        {
            parameters.sliderItemsQuantity === undefined ? <h1><span style={{color: 'red'}}>Ошибка обработки данных:</span><br /> Не введено количество слайдов</h1> :
            isNaN(sliderItemsQuantity) ? <h1><span style={{color: 'red'}}>Ошибка обработки данных:</span><br /> Введено строчное количество слайдов</h1> :
            parameters.displayedSliderItemsQuantity === undefined ? <h1><span style={{color: 'red'}}>Ошибка обработки данных:</span><br /> Не введено количество отображаемых слайдов</h1> :
            isNaN(displayedSliderItems) ? <h1><span style={{color: 'red'}}>Ошибка обработки данных:</span><br /> Введено строчное количество отображаемых слайдов</h1> :

            <div className="fill-slides-container">
                <h1>Теперь укажите контент ваших слайдов</h1>
                <div className="slides-content-fill">
                    { slideIndexes.map(index => <FillSliderItem slideIndex={index} key={index} sendToParentSlideContent={getSlideContent} sendToParentComponentStatus={getStatuses}/>) }
                </div>
                <h5 style={{color: globalStatusColor, margin: '10px 0 0 0'}}>{ globalStatus }</h5>
                <Link to={path} className='to-create-slider' onClick={setGlobalStatusAndLink}>{ linkContent }</Link>
            </div>
        }
        </>
    )
}
