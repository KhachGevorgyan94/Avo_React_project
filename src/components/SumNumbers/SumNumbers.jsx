import {useState} from "react";

export const SumNumbers = ({number_1, number_2}) => {
    const [result, setResult] = useState(0)
    const [showText, setShowText] = useState(false)


    const handleToggleText = ()=>{
        setShowText(!showText)
    }

    const handleCLick = () => {
        setResult(number_1 + number_2)
    }

    return <div className={'box-content'}>
        <p>{number_1} + {number_2} = {result} </p>
        {showText? <p>Lorem ipsum dolor sit amet.</p>: null}
        <button onClick={handleToggleText}>Hide Text</button>
        <button onClick={handleCLick}>Click</button>
    </div>
}