import './App.sass'
import Header from "../components/Header/Header"
import AnimalList from '../components/AnimalList/AnimalList';
import { useLoaderData } from 'react-router'
import type { Dog } from '../types/dogs';

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
      <AnimalList data={dogs}/>
    </div>
  );
}