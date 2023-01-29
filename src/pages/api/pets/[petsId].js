import { pets } from "@/data/pets"

export default function handler(req, res) {
  const { petsId } = req.query
  if (req.method === 'GET') {
    const pet = pets.find(pet => pet.id === parseInt(petsId))
    res.status(200).json(pet)
  }
}