import { favorites } from "@/data/favorites"
export default function handler(req, res) {
    if (req.method ==='GET') {
        res.status(200).json(favorites)
    }else if(req.method === "POST"){
        const favorite = req.body 
        let newfavorite={
            id:favorite.id,
            name:favorite.name,
            author:favorite.author,
            type:favorite.type,
            owner:favorite.owner,
            about:favorite.about,
        }
        favorites.push(newfavorite)
        res.status(201).json(newfavorite)
    }
  }
