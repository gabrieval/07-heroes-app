import React, { useMemo } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroeScreen = () => {
  const {heroeId} = useParams();
   
  const hero = useMemo (()=> getHeroById ( heroeId ), [heroeId]);
//  const hero = getHeroById ( heroeId );
 const navigate = useNavigate();

 if  ( !hero ){
  return <Navigate to =" / "/>;
 }

 const handleReturn = () => {

  if (navigate.length <2){

    navigate.push ('/');
  }else{
    navigate(-1); 
  }

};

const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
}= hero;

  return (
    <div className=" row mt-5">
      <div className="col-4">
        <img src={`../../../assets/heroes/${ heroeId  }.jpg`}
        alt={ superhero }
        className="img-thumbnail animate__animated animate__fadeInLeft"
        /> 
     
      </div>
      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{ superhero }</h3>
        <ul className="list-group list-group-flush">

          <li className=" list-group-item">  <b>Alter ego: </b>   {alter_ego} </li>
          <li className=" list-group-item">  <b>Publisher: </b>   {publisher} </li>
          <li className=" list-group-item">  <b>First appearance: </b>   {first_appearance} </li>
        </ul>

        <h5> characters </h5>
        <p> { characters }</p>
        <button 
        className="btn btn-outline-info"
        onClick={ handleReturn}
        >
          Return
        </button>


      </div>

       
    </div>
  )
}
