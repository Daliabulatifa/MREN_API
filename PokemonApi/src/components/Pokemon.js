import React , {useState} from 'react'

const Pokemon = () =>{
    const [pokemon , setPokemon] = useState([]);



const handelclick = (e)=>{
    fetch ("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then (response => {
        return response.json();
}).then (response => {setPokemon (response.results.map(item =>item.name));
}).catch (error=> {
    console.log(error);
});
}
return(
    <>
    <button onClick={handelclick}>Fetch</button>
    <ul>
        {pokemon.map(item=>
            <li>{item}</li>)}
    </ul>
    </>
);
        }
export default Pokemon;