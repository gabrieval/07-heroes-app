import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeoresByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo (()=> getHeroesByPublisher( publisher), [publisher]);
// const heroes = getHeroesByPublisher( publisher);


  return (
    <div className= "card-columns animate__animated animate__fadeIn">

{
    heroes.map ( hero => (
        <HeroCard 
        key={ hero.id} 
            {...hero}
            />
           
    ))
}
    </div>
  )
}
