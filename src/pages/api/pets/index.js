import { pets } from "@/data/pets";

export default function handler(req, res) {
 

    if (req.method === 'GET') {
        
        // const pet = pets.find(pet => pet.type === parseInt(petsId))
        res.status(200).json(pets)
    } else if (req.method === "POST") {
        const pet = req.body.pet
        const newPet = {
            id: Date.now(),
            text: pet
        }
        pets.push(newPet)
        res.status(201).json(newPet)
    }
}