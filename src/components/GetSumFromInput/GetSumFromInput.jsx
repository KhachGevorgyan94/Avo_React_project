import {useState} from "react";

export const GetSumFromInput = () => {
    const [result, setResult] = useState(0)
    const [value_1, setValue_1] = useState(0)
    const [value_2, setValue_2] = useState(0)

    const handleClick = () => {
        setResult(+value_1 + +value_2)
    }

    return <div className={'box-content'}>
        <div>
            <label>
                {/*[(ng-model)]="value_1"  ayl framework angular, vue*/}

                <input

                    onChange={(e) => {
                        setValue_1(e.target.value)
                    }}
                    value={value_1}
                    type="number"/>
            </label>
            <label>
                <input
                    onChange={(e) => {
                        setValue_2(e.target.value)
                    }}
                    value={value_2}
                    type="number"/>
            </label>
        </div>
        <p style={{
            fontSize:`${value_1}px`
        }}>Lorem ipsum dolor sit amet, consectetur.</p>
        <button onClick={handleClick}>Get Sum</button>
        <p>Result : {result}</p>


    </div>
}