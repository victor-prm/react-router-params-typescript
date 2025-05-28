import './FilterButtons.sass';
import { type FilterType } from '../../types/filters.ts';

interface FilterButtonsProps {
  onFilter: (filter: FilterType) => void;
}

export default function FilterButtons({ onFilter }: FilterButtonsProps) {
  let cname = "filter-buttons";

  return (
    <div className={cname}>
      <button className={`${cname}__button`} onClick={() => onFilter('all')}>All</button>
      <button className={`${cname}__button`} onClick={() => onFilter('small')}>Small</button>
      <button className={`${cname}__button`} onClick={() => onFilter('medium')}>Medium</button>
      <button className={`${cname}__button`} onClick={() => onFilter('large')}>Large</button>
    </div>
  );
}