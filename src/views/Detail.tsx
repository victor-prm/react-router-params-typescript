import './Detail.sass'
import { useLoaderData} from 'react-router';

interface Dog {
  id: string;
  breed: string;
  image: string;
}

export async function detailLoader({ params }: { params: any }) {
  const res = await fetch(`http://localhost:4000/dogs/${params.id}`);
  if (!res.ok) throw new Error("Failed to fetch dog details");
  return res.json();
}

export default function DetailPage() {
  const dog = useLoaderData() as Dog;

  return (
    <div>
      <h1>{dog.breed}</h1>
      <img src={dog.image} alt={dog.breed} />
    </div>
  );
}