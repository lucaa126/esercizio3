import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-studenti',
  imports: [RouterLink],
  templateUrl: './studenti.html',
  styleUrl: './studenti.css',
})
export class Studenti {
 @Input() nome!: string;
 @Input() classe!: string;
 @Input() id!: number;
}
