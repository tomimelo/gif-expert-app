import Config from "../../config"

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${Config.GIPHY_API_KEY}`
  const resp = await fetch(url)
  const {data = []} = await resp.json()
  return data.map(gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url
    }
  })
}