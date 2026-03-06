import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import PokemonCard from "../components/PokemonCard";

  export default function Index() {
    const[result, setResult] = useState<any[]>([]);
    useEffect(()=>{
      console.log ("Entra entre en pantalla");
      getPokemons();
    },[]);     
  const getPokemons = async () => {
    const URL ="https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL,{
      method: "GET",

  });
  
    console.log(response);
    const data = await response.json();
    console.log(data.results);
    setResult(data.results);
  };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  return (
    <ScrollView>
    <View>
      {result.map((pokemon) => (
        <PokemonCard 
          key={pokemon.name} 
          name={pokemon.name} 
          url={pokemon.url} 
        />
        
      ))}
    </View>
    </ScrollView>
  );
}
