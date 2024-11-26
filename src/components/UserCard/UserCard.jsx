import './UserCard.scss'

export const UserCard = ({item}) => {
    return <div className={'user-card'}>
        {item.image? <img src={item.image} alt=""/> : null}
        <h3>Name: {item?.name ?? '-'}</h3>
        <p>Email: {item?.email ?? '-'}</p>
        <p>Phone: {item?.phoneNumber ?? '-'}</p>
    </div>
}
