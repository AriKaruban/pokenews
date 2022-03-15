import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokenews';
  newsOutlets=[{name:"offical Pokemon TCG",url:"https://www.pokemon.com/us/pokemon-news/#/pokemon-tcg-news",news:[]},
    {name:"PokeBeach",url:"https://www.pokebeach.com/",news:[]},{name:"PokeGuardian",url:"https://www.pokeguardian.com/",news:[]}]
}
