import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-studenti',
  imports: [],
  templateUrl: './studenti.html',
  styleUrl: './studenti.css',
})
export class Studenti {
 @Input() nome!: string;
 @Input() classe!: string;
 
}
