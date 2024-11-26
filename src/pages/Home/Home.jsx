import './Home.scss'
import {UserCard} from "../../components/UserCard/UserCard";
import image_1 from '../../assets/images/banner.jpg'
export const Home = () => {

    const usersList = [
        {
            image:image_1,
            name: 'Alex',
            email: '4zJpK@example.com',
            phoneNumber: '123456789'
        },
        {
            name: 'Alex',
            email: '4zJpK@example.com',
            phoneNumber: '123456789'
        },
        {
            name: 'Alex',
            email: '4zJpK@example.com',
            phoneNumber: '123456789'
        },
        {
            name: 'Alex',
            email: '4zJpK@example.com',
            phoneNumber: '123456789'
        },
        {
            name: 'Alex',
            email: '4zJpK@example.com',
            phoneNumber: '123456789'
        },
        {
            image:image_1,
            name: 'Alex',
            email: '4zJpK@example.com',
            phoneNumber: '123456789'
        },
        {
            name: 'Alex',
            email: '4zJpK@example.com',
            phoneNumber: '123456789'
        },
        {
            name: 'Alex',
            email: '4zJpK@example.com',
            phoneNumber: '123456789'
        },
        {
            name: 'Alex',
            email: '4zJpK@example.com',
            phoneNumber: '123456789'
        },
        {
            name: 'Alex',
            email: '4zJpK@example.com',
            phoneNumber: '123456789'
        },
        {
            name: 'Alex',
            email: '4zJpK@example.com',
            phoneNumber: '123456789'
        },
        {
            name: 'Alex',
            email: '4zJpK@example.com',
            phoneNumber: '123456789'
        },
        {
            name: 'Alewerx',
            email: '4zJpK@werwerexample.com',
            phoneNumber: '12345wer6789'
        },
        {
            name: 'Alwerex',
            email: '4zJpK@rwerwerexample.com',
            phoneNumber: '1wer23456789'
        },
        {
            name: 'Alwerex',
            email: '4zJpK@ewerwerxample.com',
            phoneNumber: '123wer23rwer456789'
        },
        {
            name: 'Alewrwerex',
            email: '4zJpK@example.com',
            phoneNumber: '123456789'
        },
    ]




    return <div>
        <h3>Home</h3>
        <div className={'users-list'}>
            {usersList.map((item, index)=>{
                return <UserCard item={item} key={index}/>
            })}
        </div>
    </div>
}




