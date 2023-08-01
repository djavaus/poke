import { useEffect, useState } from "react"
import Card from "./components/Card"

const App = () => {



  let pokemons = [
    {
      name: "bulbasaur",
      id: "1"
    },
    {
      name: "ivysaur",
      id: "2"
    },
    {
      name: "venusaur",
      id: "3"
    },
    {
      name: "charmander",
      id: "4"
    },
    {
      name: "charmeleon",
      id: "5"
    },
    {
      name: "charizard",
      id: "6"
    },
    {
      name: "squirtle",
      id: "7"
    },
    {
      name: "wartortle",
      id: "8"
    },
    {
      name: "blastoise",
      id: "9"
    },
    {
      name: "caterpie",
      id: "10"
    },
    {
      name: "metapod",
      id: "11"
    },
    {
      name: "butterfree",
      id: "12"
    },
    {
      name: "weedle",
      id: "13"
    },
    {
      name: "kakuna",
      id: "14"
    },
    {
      name: "beedrill",
      id: "15"
    },
    {
      name: "pidgey",
      id: "16"
    },
    {
      name: "pidgeotto",
      id: "17"
    },
    {
      name: "pidgeot",
      id: "18"
    },
    {
      name: "rattata",
      id: "19"
    },
    {
      name: "raticate",
      id: "20"
    }
  ]

  console.log();
  const [count, setCount] = useState([])
  const [num, setNum] = useState(-1)
  useEffect(() => {
   count[count.length - 1] ? setNum(num - 1) : setNum(num + 1)
}, [count])



 

  
  
  return (
    <>
    <div className="poke">
      <div className="container">
      <p className="poke__title">Поймано покемонов:</p>
      <p className="poke__quant">{`${num} / 20`}</p>
      <div className="poke__wrapper">
        
      
          {pokemons.map((el) => (
            <Card name={el.name} id={el.id} setCount={setCount} count={count}/>
          ))}
        
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
