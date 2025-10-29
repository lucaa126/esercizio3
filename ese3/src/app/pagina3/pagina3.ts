import { Component } from '@angular/core';
import { Studenti } from '../studenti/studenti';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StudentiService } from '../services/studenti-service';


@Component({
  selector: 'app-pagina3',
  imports: [Studenti,CommonModule,RouterLink],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css',
})
export class Pagina3 {
 studenti: any[] = [];
  constructor(private studentiService: StudentiService) {}
  ngOnInit() {
    this.studenti = this.studentiService.getStudenti();
  }
}
