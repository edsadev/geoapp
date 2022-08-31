const API = process.env.REACT_APP_GEO_API_KEY

const endPoints = {
  geo: {
    getLocation: (ip) => {
      return `https://api.getgeoapi.com/v2/ip/${ip}?api_key=${API}&format=json&language=en`
    }
  }  
}

export default endPoints