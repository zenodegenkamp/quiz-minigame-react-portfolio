import React from "react"
import Logo from './components/Logo'
import SplineScene from "./components/SplineScene";
import GameInfo from "./components/GameInfo";

export default function App() {

    const [isOpen, setIsOpen] = React.useState(false)

    function handleClick() {
        setIsOpen(oldValue => !oldValue)
    }


    return (
        <>
            <Logo />
            <div className="contentWrapper">

                <div className="contentWrapper__left">

                    <GameInfo handleClick={handleClick} />
                </div>
                <div className="contentWrapper__right">
                    {isOpen ? (
                        <SplineScene handleClick={handleClick} open={true} />
                    ) : (
                        <SplineScene handleClick={handleClick} open={false} />
                    )}
                </div>
            </div>
        </>
    );

}

