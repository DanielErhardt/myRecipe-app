import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

export default function UserRecipesFilter() {
  const { setUserRecipesFilter } = useContext(RecipesContext);

  const handleClickFilter = ({ target }) => {
    setUserRecipesFilter(target.name);
  };

  return (
    <header>
      <button
        data-testid="filter-by-all-btn"
        type="button"
        name="All"
        onClick={ handleClickFilter }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        name="Food"
        onClick={ handleClickFilter }
      >
        Foods
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        name="Drink"
        onClick={ handleClickFilter }
      >
        Drinks
      </button>
    </header>
  );
}
