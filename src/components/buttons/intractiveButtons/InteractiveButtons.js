import React from "react";
import './InteractiveButtons.css'

const InteractiveButtons = props => {
    const soundButtonHandler = () => {
        // web speech api req
        let utterance = new SpeechSynthesisUtterance(`${props.dataArr[2]} by ${props.dataArr[1]}`);
        speechSynthesis.speak(utterance);
    }

    const copyButtonHandler = () => {
        navigator.clipboard.writeText(props.dataArr[2]);
    }

    const telegramButtonHandler = () => {
        const telegramUrl = `https://t.me/share/url?url=${props.dataArr[2]}&text=${props.dataArr[1]}`
        window.open(telegramUrl, '_blank');
    }

    return (
        <ul className={`social`}>
            <li className={`sound`} onClick={soundButtonHandler}><i className={`fas fa-volume-up`}/></li>
            <li className={`copy`} onClick={copyButtonHandler}><i className={`fas fa-copy`}/></li>
            <li className={`telegram`} onClick={telegramButtonHandler}><i className={`fab fa-telegram-plane`}/></li>
        </ul>
    )
}

export default InteractiveButtons;