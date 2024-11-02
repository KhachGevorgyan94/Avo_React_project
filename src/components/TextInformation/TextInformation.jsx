import './TextInformation.scss'
import {useState} from "react";

export const TextInformation = ({title, description, img}) => {
    const [newCounter, setNewCounter] = useState(0)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    let counter = 0

    const handleClick = (e) => {
        // console.log('click')
        // counter++
        setNewCounter(newCounter + 1)

        // console.log(counter)
    }


    return <div className={'box-content'}>
        <img src={img} alt=""/>
        <div style={{backgroundImage: `url(${img})`}}></div>
        <h3>{title ? title : 'empty title'}</h3>
        <p>{description ?? 'empty description'}</p>
        <h3>{newCounter}</h3>
        {/*<button onClick={(e)=>{*/}
        {/*    handleClick(e)*/}
        {/*}}>Click me</button>*/}
        <button onClick={handleClick}>Click me</button>
    </div>
}


// button.addEventListener('click', function (e){
//
// })