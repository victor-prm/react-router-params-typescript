import { useEffect, useState } from 'react';
import './Header.sass'
import { FaRegBell, FaLocationDot, FaChevronDown } from "react-icons/fa6";

interface HeaderData {
  image: string;
  location: string;
}

export default function Header() {
  const cname = 'header';

  const [data, setData] = useState<HeaderData | null>(null);

  useEffect(() => {
    fetch(`http://localhost:4000/user`)
      .then(response => response.json())
      .then((data: HeaderData) => {
        setData(data);
        console.log(data);
      });
  }, []);

  if (!data) return null;

  return (
    <header className={cname}>
      <button className={`${cname}__profile-btn`}>
        <img className={`${cname}__profile-img`} src={data.image} alt="" />
      </button>
      <span className={`${cname}__location-wrapper`}>
        <FaLocationDot className={`${cname}__location-icon`} />
        <small className={`${cname}__location-text`}>{data.location}</small>
        <FaChevronDown className={`${cname}__location-chevron`} />
      </span>
      <button className={`${cname}__notification-btn`}>
        <FaRegBell className={`${cname}__notification-icon`} />
      </button>
    </header>
  );
}