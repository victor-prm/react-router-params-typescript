import './AnimalItem.sass'
import { Link } from "react-router"
import { FaLocationDot, FaRulerCombined } from "react-icons/fa6";
import type { Dog } from '../../types/dogs';

interface AnimalItemProps {
  data: Dog;
}

export default function AnimalItem({ data }: AnimalItemProps) {
  let cname = "animal-item";

    return (
        <li className={`${cname}`}>
            <img className={`${cname}__img`} src={data.image} alt="" />
            <div className={`${cname}__text-wrapper`}>
                <h2> <Link to={`/detail/${data.id}`}>{data.breed}</Link> </h2>
                <span className={`${cname}__meta`}> 
                    <small className={`${cname}__meta-location`}> <FaLocationDot/>{data.location} </small>
                    <small className={`${cname}__meta-size`}> <FaRulerCombined/> {data.size} </small>
                </span>
                <p>{data.short_description}</p>
            </div>
        </li>
    )
}