import React, {useState,useEffect} from "react";
import './Buttons.css';
import InteractiveButtons from "./intractiveButtons/InteractiveButtons";

const Buttons = props => {
    const [datas, setDatas] = useState([])
    const [buttonLoading, setButtonLoading] = useState(``);
    const [buttonLoadingText, setButtonLoadingText] = useState(`New Quote`);

    const randomQuote = () => {
        setButtonLoading(`loading`);
        setButtonLoadingText(`Loading Quote...`);
        fetch(`https://api.quotable.io/random`)
            .then(res => res.json())
            .then(result => {
                setDatas([
                    result._id,
                    result.author,
                    result.content
                ])
                props.data(datas);
                setButtonLoading(``);
                setButtonLoadingText(`New Quote`)
            })
    }
    useEffect(() => {
        fetch(`https://api.quotable.io/random`).then(res => res.json()).then(result => {
            setDatas([
                result._id,
                result.author,
                result.content
            ])
            props.data(datas);
        })
    },[])

    return (
        <div className={`buttons`}>
            <div className={`features`}>
                <InteractiveButtons dataArr={props.dataArr}/>
                <button className={`${buttonLoading}`} onClick={randomQuote}>{buttonLoadingText}</button>
            </div>
        </div>
    );
}

export default Buttons;