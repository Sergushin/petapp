import { pets } from "@/data/pets";

export default function handler(req, res) {
    
    
    if (req.method === 'GET') {
        const pet = pets.filter(pet => pet.type === req.query.type)
        res.status(200).json(pet)
    }    
}