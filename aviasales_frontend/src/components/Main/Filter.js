import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { filterSelector } from '../../features/filter/selectors';
import { toggleAction } from '../../features/filter/ducks';

import { CheckBar } from '../../ui/CheckBar';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const handleClick = id => e => {
    e.preventDefault();
    dispatch(toggleAction(id));
  }

  return (
    <CheckBar 
      header="количество пересадок"
      handleClick={handleClick} 
      checkData={filter}
    />
  )
}
