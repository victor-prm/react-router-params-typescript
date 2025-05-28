import './App.sass'
import Header from "../components/Header/Header"
import FilterButtons from '../components/FilterButtons/FilterButtons';
import AnimalList from '../components/AnimalList/AnimalList';
import { useLoaderData } from 'react-router';
import { useState } from 'react';
import type { Dog } from '../types/dogs';
import { type FilterType } from '../types/filters.ts';

export async function appLoader() {
  const res = await fetch('http://localhost:4000/dogs');
  if (!res.ok) throw new Error("Failed to fetch dogs");
  return res.json();
}

export default function App() {
  const dogs = useLoaderData() as Dog[];
  const [filter, setFilter] = useState<FilterType>('all');


  const filteredDogs = filter === 'all' ? dogs : dogs.filter(dog => dog.size === filter);

  return (
    <div className='root-app'>
      <Header />
      <FilterButtons onFilter={setFilter}></FilterButtons>
      <AnimalList data={filteredDogs} />
    </div>
  );
}