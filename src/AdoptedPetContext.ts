import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
  {
    id: "1337",
    name: "Fluffy",
    animal: "dog",
    description: "some description",
    breed: "beagle",
    images: [],
    city: "Seattle",
    state: "Wa",
  },
  () => {},
]);

export default AdoptedPetContext;
