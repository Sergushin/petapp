import { favorites } from "@/data/favorites"



export default function handler(req, res) {
  const { favoriteId } = req.query
  if (req.method === 'GET') {
    const favorite = favorites.find(favorite => favorite.id === parseInt(favoriteId))
    res.status(200).json(favorite)
  } else if (req.method === 'DELETE') {
    const deletedfavorite = favorites.find( favorite => favorite.id === parseInt(favoriteId))
    const index = favorites.findIndex(
      favorite => favorite.id === parseInt(favoriteId)
    )
    favorites.splice(index, 1)
    res.status(200).json(deletedfavorite)
  }
}
//find binary search in javascript