import React from 'react'
import ReactDOM from 'react-dom/client'
import Generator from './sliderGeneratorMain'
import './css/index.css'

function App() {
    return (
        <Generator />
    )
}


ReactDOM.createRoot(document.querySelector('#app')).render(<App />)
