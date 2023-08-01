import React from "react";
import { useState, useEffect } from "react";

const Card = ({name, id, setCount, count}) => {

  

    const [poke, setPoke] = useState(false)
   
    useEffect(() => {
        
    }, [])

    const getPoke = () => {
      setPoke(!poke)
      setCount([...count, poke])
    } 



   

    
    
    return (
    <>
<div   className={`poke__card ${poke ? "release":  "catch"}`}>
        <p>{name}</p>
        <div className="poke__img"> 
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` }/>
        </div>
           <button  onClick={getPoke}>{poke ? "Отпустить" : "ПОймать"}</button> 
        </div>



    </>)
}

export default Card