import Spline from '@splinetool/react-spline';
import React from 'react'
import {RiCloseLine } from 'react-icons/ri'
import Main from '../components/Main'

export default function SplineScene( props ) {

    console.log(props.open)
    const [quizStarted, setQuizStarted] = React.useState(false)
    
    console.log(quizStarted)
    function toggleQuizStarted(){
        setQuizStarted(oldValue => !oldValue)
    }
   
    function onMouseDown(e) {
        console.log(e)
        if (e.target.name === "iMac") {
            console.log('I have been clicked!');
            toggleQuizStarted()
        }
    }

    return (
        <div className={props.open ? 'spline__container-open' : 'spline__container'}>
            <div className='spline__container__header'>

            </div>
            
                {props.open ? <div className='spline__container__closebutton' ><RiCloseLine className="close_icon" color="black" size={60} onClick={props.handleClick} /></div> : ""}

            
            <div className='spline__container__spline'>

                {quizStarted ? (
                    <>
                        <Main />
                    </>
                ) : (
                    <Spline className={props.open ? 'spline__scene-open' : 'spline__scene'} scene="https://prod.spline.design/QQKEyJaPPL5UGRSo/scene.splinecode"
                        onMouseDown={onMouseDown}
                    />
                )}

            </div>

        </div>


    )
}
