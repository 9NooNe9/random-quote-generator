import './App.css';
import Quote from "./components/quote/Quote";
import Buttons from "./components/buttons/Buttons";
import React, {useState, useEffect} from "react";

function App() {
    const [dataArr, setDataArr] = useState([])

    const data = (data) => {
        setDataArr([
            ...data
        ])
    }
    useEffect(() => {
        fetch(`https://api.quotable.io/random`).then(res => res.json()).then(result => {
            setDataArr([
                result._id,
                result.author,
                result.content
            ])
        })
    }, [])

    return (
        <div className={`app`}>
            <div className={`wrapper`}>
                <header>Quote of the day</header>
                <Quote data={dataArr}/>
                <Buttons data={data} dataArr={dataArr}/>
            </div>
        </div>
    );
}

export default App;
