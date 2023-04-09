import React, {useState} from 'react'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import SelectSlierItemsQuantity from './components/selectSliderItemsQuantity'
import SelectDisplayedSLiderItemsQuantity from './components/selectDisplayedSLiderItemsQuantity'
import CreateSlider from './components/createSlider'
import Slider from './slider'
import FillSlides from './components/fillSlides'
import BeforeSlidesFIlling from './components/brforeSlideFilling'


export default function Generator() {
    const [slidesContent, setSlidesContent] = useState('None')
    const [sliderParameters, setParameters] = useState({
        sliderItemsQuantity: 1,
        displayedSliderItemsQuantity: 1
    })

    function getSliderItemsQuantity(value) {
        setParameters({
            sliderItemsQuantity: value,
            displayedSliderItemsQuantity: 1
        })
    }

    function getDisplayedSliderItemsQuntity(value) {
        setParameters({
            sliderItemsQuantity: sliderParameters.sliderItemsQuantity,
            displayedSliderItemsQuantity: value
        })
    }

    function getSlidesContent(value) {
        setSlidesContent(current => current = value)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SelectSlierItemsQuantity  sendToParentSliderItemsQuantity={getSliderItemsQuantity} /> }/>
                <Route path='/selectDisplayedSLiderItemsQuantity' element={<SelectDisplayedSLiderItemsQuantity sendToParentDisplayedSliderItemsQuantity={getDisplayedSliderItemsQuntity}/>}/>
                <Route path='/beforeSlidesFilling' element={<BeforeSlidesFIlling />}/>
                <Route path='/fillSlides' element={<FillSlides parameters={sliderParameters} sendToParentSLiderContent={getSlidesContent}/>}/>
                <Route path='/createSlider' element={<CreateSlider />}/>
                <Route path='/slider' element={<Slider parameters={sliderParameters} content={slidesContent}/>}/>
            </Routes>
        </BrowserRouter>
    )
}
