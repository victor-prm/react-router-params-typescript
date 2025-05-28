import './Detail.sass'
import { useLoaderData} from 'react-router';
import type { Dog } from '../types/dogs';
import DetailCard from '../components/DetailCard/DetailCard';

export async function detailLoader({ params }: { params: any }) {
  const res = await fetch(`http://localhost:4000/dogs/${params.id}`);
  if (!res.ok) throw new Error("Failed to fetch dog details");
  return res.json();
}

export default function DetailPage() {
  const dog = useLoaderData() as Dog;

  return (
    <div>
      <DetailCard data={dog}/>
    </div>
  );
}