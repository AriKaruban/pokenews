const axios = require("axios").default;
const officialTCG="https://www.pokemon.com/us/api/news/tcg-strategy?index=0&count=10";
const pokeBeach="https://www.pokebeach.com/";
const DOM = require('jsdom').JSDOM;

async function getNews(){
    await Promise.all([
        getOfficalTCGPokemon(),
        getPokeBeach()
    ]);
}

async function getOfficalTCGPokemon(){
    let response = await axios.get(officialTCG);
    let json=response.data;
    // console.log(response.data)
}

async function getPokeBeach(){
    let response = await axios.get(pokeBeach);
    let html=response.data;
    let dom=new DOM(html);
    let articles=dom.window.document.querySelectorAll('div.block-container > div');
    for (let article of articles){
        let header=article.querySelector('div.heading-fp');
        if (!header) continue;
        let headerText=header.textContent;
        let anchor=header.querySelector('a');
        if (!anchor) continue;
        let url=anchor.href;
        let timePostedText=article.querySelector('ul.entry-meta > li:nth-of-type(2)').textContent.replace(/\n|\t|at\s|Posted\son/g,'');
        let timePosted=new Date(timePostedText).toJSON();
        let str=`${headerText}\nPosted on ${new Date(timePosted).toLocaleString()}\nURL: ${url}`;
        console.log(str);
    }
}

module.exports={
    getNews
}