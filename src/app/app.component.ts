import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokenews';
  newsOutlets=[{name:"offical Pokemon TCG",url:"https://www.pokemon.com/us/pokemon-news/#/pokemon-tcg-news"},
{name:"PokeBeach",url:"https://www.pokebeach.com/"},{name:"PokeGuardian",url:"https://www.pokeguardian.com/"}]
}
