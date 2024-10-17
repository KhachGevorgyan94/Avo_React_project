import './TextInformation.scss'

export const TextInformation = ({title, description, img}) => {
// props => {}
// const {title, description} = props
    return <div className={'box-content'}>
        <img src={img} alt=""/>
        <div style={{backgroundImage: `url(${img})`}}></div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
}

