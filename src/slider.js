import React, {useState, useRef, useEffect} from 'react'
import Mark from './components/mark'
import Slide from './components/slide'
import SLiderError from './components/sliderError'




export default function Slider({parameters, content}) {
    const sliderWindowWidth = 1130
    const sliderItemsQuantity = parameters.sliderItemsQuantity
    const displayedSliderItems = parameters.displayedSliderItemsQuantity
    const sliderItemWidth = sliderWindowWidth / displayedSliderItems
    const designationMarks = useRef()
    let errorRate = 0

    if (displayedSliderItems % 3 === 0) errorRate = 1

    const [rightOffset, setOffset] = useState(0)
    const [displayedSliderItem, setDisplayedItem] = useState(0)

    useEffect(() => {
        if (displayedSliderItems !== 1 || content === 'None') return

        for (let i = 0; i < sliderItemsQuantity; i++) {
            designationMarks.current.children[i].classList.remove('active')
            designationMarks.current.children[displayedSliderItem].classList.add('active')
        }
    })

    function toRight() {
        if (rightOffset < sliderItemWidth - errorRate) {
            setOffset(current => current + sliderItemWidth * sliderItemsQuantity - sliderWindowWidth)
            setDisplayedItem(current => current + sliderItemsQuantity - 1)
        } else {
            setOffset(current => current - sliderItemWidth)
            setDisplayedItem(current => current - 1)
        }
    }

    function toLeft() {
        if (rightOffset >= sliderItemWidth * sliderItemsQuantity - sliderWindowWidth - errorRate) {
            setOffset(0)
            setDisplayedItem(0)
        } else {
            setOffset(current => current + sliderItemWidth)
            setDisplayedItem(current => current + 1)
        }
    }

    return (
        <>
            {
                content === 'None' ? <SLiderError /> :

                <div className="slider-container">
                    <div className="slider">
                        <button className='slider-button-prev' onClick={toRight}>&larr;</button>
                        <div className="slider-window" style={{maxWidth: sliderWindowWidth}}>
                            <div className="slider-block" style={{minWidth: sliderItemsQuantity * sliderWindowWidth, right: rightOffset}}>
                                {content.map(sliderContent => <Slide key={sliderContent.index} sliderWidth={sliderItemWidth} content={sliderContent}/> )}
                            </div>
                        </div>
                        <button className='slider-button-next' onClick={toLeft}>&rarr;</button>
                    </div>
                    <div className="designation-marks">
                        <ul className='list' ref={designationMarks}>
                            {displayedSliderItems === 1 ? content.map(sliderContent => <Mark key={sliderContent.index}/>) : <></>}
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}
