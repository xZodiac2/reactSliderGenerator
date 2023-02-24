import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import './index.css'

class Generator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // innderHTML will be rewriting to container time user click on buttons
            innerHTML: (
                <>
                    <h1 className="title">Вас приветствует генератор слайдеров! <br /><br /> Для начала работы нажмите на СТАРТ</h1>
                    <button className="start" onClick={ this.start }>СТАРТ</button>
                </>
            ),
            step: -1,
            rightOffset: 0,
            displayedSliderItemIndex: 0
        }
        this.reftToDesignationList = React.createRef()
        this.refToSLiderItemsQuantity = React.createRef()
        this.refToDisplayedSliderItems = React.createRef()
        this.refToSLiderBlock = React.createRef()
        this.refToSliderWindow = React.createRef()
    }


    // Component HMTL content if user click on button "start".
    // From this part of component we get value of displayed slider items quantity
    start = () => {
        this.setState(state => {
            return {
                innerHTML: (
                    <>
                        <h1>Приступим!</h1>
                        <div className="form" action="#1">
                            <h2>Для начала укажите количество слайдов:</h2>
                            <input type="text" placeholder="Количество слайдов" required ref={ this.refToSLiderItemsQuantity }/>
                            <button className="accept" onClick={ this.step1 } type="submit">Сохранить</button>
                        </div>
                        <div className="designation">
                            <ul className="designation-list" ref={ this.reftToDesignationList }>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </>
                ),
                step: state.step += 1
            }
        })
    }

    sliderItemsQuantity = 0
    displayedSliderItems = 0


    // Component HMTL content if user set slider items quantity. Here we get desplayed slider items quantity
    step1 = () => {
        this.sliderItemsQuantity = this.refToSLiderItemsQuantity.current.value
        if (this.sliderItemsQuantity === '' || this.sliderItemsQuantity === '0') return
        else {
            this.setState(state => {
                return {
                    innerHTML: (
                        <>
                            <h1>Приступим!</h1>
                            <div className="form">
                                <h2>Теперь укажите сколько слайдов будет показываться:</h2>
                                <input type="text" placeholder="Количство показываемых слайдов" ref={ this.refToDisplayedSliderItems }/>
                                <button className="accept" onClick={ this.step2 }>Сохранить</button>
                            </div>
                            <div className="designation">
                                <ul className="designation-list" ref={ this.reftToDesignationList }>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </>
                    ),
                    step: state.step += 1
                }
            })
        }
    }


    // Final component HMTL content before user will be see slider
    step2 = () => {
        this.displayedSliderItems = this.refToDisplayedSliderItems.current.value
        if (this.displayedSliderItems === '' || this.displayedSliderItems === '0') return
        else {
            this.setState(state => {
                return {
                    innerHTML: (
                        <>
                            <h1>Готово!</h1>
                            <h2>Посмотреть на слайдер можно по кнопке ниже:</h2>
                            <button className="watch" onClick={ this.createSlider }>Посмотреть слайдер</button>
                            <div className="designation">
                                <ul className="designation-list" ref={ this.reftToDesignationList }>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </>
                    ),
                    step: state.step += 1
                }
            })
        }
    }


    // Here slider starts building
    doSliderCreated = false
    sliderDesignationList = false
    errorRate = 0


    // At first cretaing designation list items
    createDesignationListItems = () => {
        this.sliderDesignationList = true
        if (this.displayedSliderItems === '1') {
            let html = ''
            for (let i = 0; i < this.sliderItemsQuantity; i++) {
                html += '<li></li>'
            }

            return html
        }
    }

    // At second creating slider items, which quantity depends from variable "sliderItemsQuantity".
    // Text which recorded in the slider items stay default and user no way select it
    createSLiderItems = () => {
        let html = ''
        for (let i = 0; i < this.sliderItemsQuantity; i++) {
            html += "<div><h1>Слайд</h1><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga commodi voluptatibus placeat impedit, voluptate, fugit necessitatibus quod aspernatur distinctio culpa quis voluptates consectetur dolor nisi? Nostrum consequuntur quidem ullam ea tempora dignissimos officiis praesentium error cupiditate reprehenderit magni ipsa voluptatum totam sequi necessitatibus, dolorem doloremque repudiandae maxime provident dolore adipisci tempore, accusamus ratione. At porro quia repudiandae aliquid totam deleniti dolorum molestias iure illo magnam, culpa quisquam libero nulla ipsa perspiciatis vel. Consectetur laboriosam quisquam dolores corporis ducimus autem, ipsum ipsam incidunt placeat error sequi possimus accusamus quos consequuntur perspiciatis soluta reiciendis laborum natus, cumque provident. Ea accusamus id quae.</p></div>"
        }
        return html
    }


    // Slider buttons logic
    prev = () => {
        if (this.state.rightOffset < this.refToSLiderBlock.current.children[0].clientWidth - this.errorRate) {
            this.setState(() => {
                return {
                    rightOffset: this.refToSLiderBlock.current.clientWidth - this.refToSliderWindow.current.clientWidth,
                    displayedSliderItemIndex: this.sliderItemsQuantity - 1
                }
            })
        } else {
            this.setState(state => {
                return {
                    rightOffset: state.rightOffset -= this.refToSLiderBlock.current.children[0].clientWidth,
                    displayedSliderItemIndex: state.displayedSliderItemIndex -= 1
                }
            })
        }
    }

    next = () => {
        if (this.state.rightOffset >= this.refToSLiderBlock.current.clientWidth - this.refToSliderWindow.current.clientWidth - this.errorRate) {
            this.setState(() => {
                return {
                    rightOffset: 0,
                    displayedSliderItemIndex: 0
                }
            })
        } else {
            this.setState(state => {
                return {
                    rightOffset: state.rightOffset += this.refToSLiderBlock.current.children[0].clientWidth,
                    displayedSliderItemIndex: state.displayedSliderItemIndex += 1
                }
            })
        }
    }


    // Creating slider
    createSlider = () => {
        this.doSliderCreated = true
        this.setState(() => {
            return {
                innerHTML: (
                    <>
                        <div className="slider">
                            <div className="slider-container">
                                <div className="slider-button prev" onClick={ this.prev }>&larr;</div>
                                <div className="slider-window" ref={ this.refToSliderWindow }>
                                    <div className="slider-block" dangerouslySetInnerHTML={{ __html: this.createSLiderItems() }} ref={ this.refToSLiderBlock } style={{ right: this.state.rightOffset }}>
                                        { /* This block HTML content recorded from function "createSLiderItems" */}
                                    </div>
                                </div>
                                <div className="slider-button next" onClick={ this.next }>&rarr;</div>
                            </div>
                            <div className="designation">
                                <ul className="designation-list" dangerouslySetInnerHTML={{ __html: this.createDesignationListItems() }} ref={ this.reftToDesignationList }>
                                    { /* This list HMTL content recorded from function "createDesignationListITems" */}
                                </ul>
                            </div>
                        </div>
                    </>
                )
            }
        })
    }


    // It's what need for adequate generator work. I know that this code performs much tasks,
    // and me very laziness write what he doing). Okay, I will write it anyway
    componentDidUpdate = () => {


        // Else slider will work incorrectly
        if (this.displayedSliderItems % 3 === 0) {
            this.errorRate = 1
        }

        // Logic for designation list. If mark have class "active" mark painted black.
        // Code perform while user selecting necessary parameters
        if (this.reftToDesignationList.current != null && this.sliderDesignationList === false) {
            for (let index = 0; index <= this.reftToDesignationList.current.childElementCount - 1; index++) {
                this.reftToDesignationList.current.children[index].classList.remove('active')
            }
            console.log(this.reftToDesignationList.current)
            console.log(this.state.step)
            this.reftToDesignationList.current.children[this.state.step].classList.add('active')
        }


        // This code perform only after slider created
        if (this.doSliderCreated === true) {


            if (this.displayedSliderItems === '1') {


                // Logic for designation list. If mark have class "active" mark painted black
                for (let index = 0; index <= this.reftToDesignationList.current.childElementCount - 1; index++) {
                    this.reftToDesignationList.current.children[index].classList.remove('active')
                }
                this.reftToDesignationList.current.children[this.state.displayedSliderItemIndex].classList.add('active')


            }


            // Right offset changing for slider be sliding
            this.refToSLiderBlock.current.style.right = `${this.state.rightOffset}px`


            // Width calculation
            const sliderItemsWidth = 1130 / this.displayedSliderItems
            const sliderBlockWidth = sliderItemsWidth * this.refToSLiderBlock.current.childElementCount


            // Width changes
            this.refToSLiderBlock.current.style.minWidth = `${sliderBlockWidth}px`
            this.refToSLiderBlock.current.style.maxWidth = `${sliderBlockWidth}px`
            for (let index = 0; index < this.sliderItemsQuantity; index++) {

                this.refToSLiderBlock.current.children[index].style.maxWidth = `${sliderItemsWidth}px`
                this.refToSLiderBlock.current.children[index].style.minWidth = `${sliderItemsWidth}px`

            }
        }
    }


    // Just component render :))))
    render() {
        return (
            <div className="container">
                { this.state.innerHTML }
            </div>
        )
    }
}

ReactDOM.createRoot(document.querySelector('#App')).render(<Generator />)
