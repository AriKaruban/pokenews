const axios = require("axios").default

async function getNews(){
    await Promise.all([getOfficalTCGPokemon()])
}

async function getOfficalTCGPokemon(){
    let response = await axios.get("https://www.pokemon.com/us/api/news/tcg-strategy?index=0&count=10")
    // console.log(response.data)
}

module.exports={
    getNews
}