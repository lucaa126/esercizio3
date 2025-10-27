import { Component, signal } from '@angular/core';
import { Pagina1 } from './pagina1/pagina1';
import { Pagina2 } from './pagina2/pagina2';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Pagina3 } from './pagina3/pagina3';


@Component({
  selector: 'app-root',
  imports: [Pagina1,Pagina2,RouterOutlet,RouterLink,Pagina3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ese3');
}
