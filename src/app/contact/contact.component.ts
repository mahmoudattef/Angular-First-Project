import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { log } from 'console';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  shoLabel(idLabel: string, idIn: string): void {
    const label = document.getElementById(idLabel);
    const input = document.getElementById(idIn) as HTMLInputElement;

    if (input?.value === "") {
      label?.classList.add('top-100');
    } else {
      label?.classList.remove('top-100');
    }
  }
}

