import './AnimalList.sass'
import AnimalItem from "./AnimalItem"

interface Dog {
  id: string;
  breed: string;
  image: string;
  location: string;
  size: string;
  short_description: string;
}


interface AnimalListProps {
  data: Dog[];
}

export default function AnimalList({ data }: AnimalListProps) {
  let cname = "animal-list";

  return (
    <ul className={cname}>
      {data.map((animal) => (
        <AnimalItem key={animal.id} data={animal} />
      ))}
    </ul>
  );
}