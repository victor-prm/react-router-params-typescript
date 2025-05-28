import './DetailCard.sass'
import { Link } from 'react-router';
import { type Dog } from '../../types/dogs';
import { FaLocationDot, FaPaw, FaVenusMars } from 'react-icons/fa6';
import pattern from '../../assets/confetti.svg'

interface DetailProps {
  data: Dog;
}



export default function DetailCard({ data }: DetailProps) {
    let cname = "detail";
    return (
        <>
            <div className={`${cname}__background`}>
                <img className={`${cname}__pattern`} src={pattern} alt="" />
                <img className={`${cname}__img`} src={data.image} alt="" />
            </div>
            <div className={`${cname}__content`}>
                <h1 className={`${cname}__content-title`}>{data.breed}</h1>
                <p className={`${cname}__content-location`}><FaLocationDot className={`${cname}__location-icon`} /> {data.location}</p>
                <div className={`${cname}__content-meta-wrapper`}>
                    <div className={`${cname}__content-meta`}>
                        <span className={`${cname}__content-icon-wrap`}><FaPaw className={`${cname}__content-icon-breed`} /></span>
                        <p className={`${cname}__content-meta-text`}>{data.breed}</p>
                    </div>
                    <div className={`${cname}__content-meta`}>
                        <span className={`${cname}__content-icon-wrap`}><FaVenusMars className={`${cname}__content-icon-gender`} /></span>
                        <p className={`${cname}__content-meta-text`}>{data.gender}</p>
                    </div>
                </div>
                <p className={`${cname}__content-description`} >{data.long_description}</p>
                <Link className={`${cname}__back-link`} to="/">Back</Link>
            </div>
        </>
      
    )
}

