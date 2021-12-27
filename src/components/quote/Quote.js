import React from "react";
import './Quote.css'

const Quote = props => {

    return (
        <div className={`content`}>
            <div className={`quote-area`}>
                <i className={`fas fa-quote-left`}/>
                <p className={`quote`}>{props.data[2]}</p>
                <i className={`fas fa-quote-right`}/>
            </div>
            <div className={`author`}>
                <span>__</span>
                <span className={`name`}>{props.data[1]}</span>
            </div>
        </div>
    );
}

export default Quote;