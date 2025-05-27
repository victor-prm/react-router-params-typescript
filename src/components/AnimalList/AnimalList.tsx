import './AnimalList.sass'
import AnimalItem from "./AnimalItem"
import type { Dog } from '../../types/dogs';

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