const axios = require("axios").default;
const officialTCG="https://www.pokemon.com/us/api/news/tcg-strategy?index=0&count=10";
const pokeBeach="https://www.pokebeach.com/";
const pokeGuardian="https://www.pokeguardian.com/";
const DOM = require('jsdom').JSDOM;

async function getNews(){
    let allNews=await Promise.all([
        getOfficalTCGPokemon(),
        getPokeBeach(),
        getPokeGuardian()
    ]);
    console.log(allNews)
}

async function getOfficalTCGPokemon(){
    let response = await axios.get(officialTCG);
    let json=response.data;
    for (let entry of json){
        entry.timePosted=new Date(entry.date).toLocaleDateString();
    }
    return json;
}

async function getPokeBeach(){
    let response = await axios.get(pokeBeach);
    let html=response.data;
    let dom=new DOM(html);
    let articles=dom.window.document.querySelectorAll('div.block-container > div');
    let allArticles=[];
    for (let article of articles){
        let header=article.querySelector('div.heading-fp');
        if (!header) continue;
        let headerText=header.textContent;
        let anchor=header.querySelector('a');
        if (!anchor) continue;
        let url=anchor.href;
        let timePostedText=article.querySelector('ul.entry-meta > li:nth-of-type(2)').textContent.replace(/\n|\t|at\s|Posted\son/g,'');
        let timePosted=new Date(timePostedText).toLocaleDateString();
        let obj={
            "title":headerText,
            "url":url,
            "timePosted":timePosted
        }
        allArticles.push(obj);
    }
    return allArticles;
}

async function getPokeGuardian(){
    let response = await axios.get(pokeGuardian);
    let html=response.data;
    let dom=new DOM(html);
    let articles=dom.window.document.querySelectorAll('article');
    let allArticles=[];
    for (let article of articles){
        let header=article.querySelector('header');
        let headerText=header.querySelector('a').textContent.replace(/\n|\t/g,'').trim();
        let timePostedText=header.querySelector('span').textContent;
        let timePosted=new Date(timePostedText).toLocaleDateString();
        let url=header.querySelector('a').href;
        let obj={
            "title":headerText,
            "url":url,
            "timePosted":timePosted
        }
        allArticles.push(obj);
    }
    return allArticles;
}

module.exports={
    getNews
}