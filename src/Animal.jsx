import { useEffect, useState } from "react";
import Pet from './Pet'

const Animal = () => {
    const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]
    const breeds = [];
    const pets = [];

    const [location, updateLocation] = useState("");
    const [animal, updateAnimal] = useState("");
    const [breed, setBreed] = useState("");
    

    useEffect(()=> {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
        const json = await res.json();
        setPets(json.pets);
    }

    return (
        <div>
            <label htmlFor="animal">
                Animal
                <select id="animal" value={animal} 
                    onChange={(e)=>{updateAnimal(e.target.value);updateBreed("");}}
                    onBlur={(e)=>{updateAnimal(e.target.value);updateBreed("");}}
                >
                  <option />
                  {ANIMALS.map((animal)=>(
                    <option key={animal} value={animal}>{animal}</option>
                  ))}
                  <option></option>
                </select>
            </label>
            <label htmlFor="breed">
                Breed
                <select disable={!breeds.length} id="breed" value={breed}
                  onChange={(e)=>setBreed(e.target.value)}
                  onBlur={(e)=>setBreed(e.target.value)}
                  >
                    <option />
                    {breeds.map((breed)=>{
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                    })}
                  </select>
            </label>
            {
                pets.map((pet) => {
                    <Pet name={pet.name} breed={pet.breed} animal={pet.animal} key={pet.id}/>
                })
            }
        </div>
    );
}

export default Animal;