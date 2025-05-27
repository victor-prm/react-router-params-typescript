import './App.sass'
import Header from "../components/Header/Header"
import { useLoaderData } from 'react-router'

interface Dog {
  id: string;
  breed: string;
  image: string;
}

export async function appLoader() {
  const res = await fetch('http://localhost:4000/dogs');
  if (!res.ok) throw new Error("Failed to fetch dogs");
  return res.json();
}

export default function App() {
  const dogs = useLoaderData() as Dog[];

  return (
    <div>
      <Header />
      <h1>Dog List</h1>
      <ul>
        {dogs.map(dog => (
          <li key={dog.id}>{dog.breed}</li>
        ))}
      </ul>
    </div>
  );
}