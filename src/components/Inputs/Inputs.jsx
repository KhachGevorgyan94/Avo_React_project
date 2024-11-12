import {useEffect, useState} from "react";

export const Inputs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
    })
    const [counter, setCounter] = useState(0)
    console.log('111111111')
    let timer = null

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(formData, 'from function')

    }
    //
    // useEffect(() => {
    //     console.log(formData)
    // }, [formData])


    // function foo() {
    //     console.log('sadashjdgajhsdags')
    // }

    // foo()

    // 1. ete [] datark e funkcian ashxatum e 1 angfam
    // vor@ handisanum e class component componentDidMount funkciain

    // 2. ete [] avelacnum enq ayn popoxakanner@ voronc popoxutyan jamanak uzum eqn katarvi inch vor funkcianeri kanch kam gorcoxutyun

    // 3. use effect function ir mej uni return callback funkcia vor@ kirarelu jamanak, ashxatum e ayn depqum erb tvyal component@ kjnjvi mer DOM elementic
    //  ayn himnakanum ogtagorcum eqn timoutner@ VERAHSKELU HAMAR
    useEffect(() => {
        console.log('4444444')
        let x = counter+1
        timer = setInterval(() => {
            setCounter(x)
            console.log(counter)
        }, 1000)

        return ()=>{
            clearInterval(timer)
        }


        // foo()
    }, [])

    useEffect(() => {
        console.log(formData, 'from use effect')
    }, [formData])

    console.log('33333333')

    return <div>
        <label>

            {console.log('5555555555')}
            <input name={'firstName'} type="text" value={formData.firstName} onChange={handleChange}/>
        </label>
        <label>
            <input name={'lastName'} type="text" value={formData.lastName} onChange={handleChange}/>
        </label>
        <button>Click</button>
    </div>
}
//

// export default class Inputs extends React.Component {
//
//     componentDidMount() {
//
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//
//     }
//     componentWillUnmount() {
//
//     }
//
//     render() {
//         return <div>
//             <label>
//                 <input name={'firstName'} type="text" value={formData.firstName} onChange={handleChange}/>
//             </label>
//             <label>
//                 <input name={'lastName'} type="text" value={formData.lastName} onChange={handleChange}/>
//             </label>
//             <button>Click</button>
//         </div>
//     }
// }
