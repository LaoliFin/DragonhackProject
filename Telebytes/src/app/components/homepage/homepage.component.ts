import { Component } from '@angular/core';
//import { trigger, transition, style, animate } from '@angular/animations';
//import { HostListener } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  /*animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ]*/
})
export class HomepageComponent {
  dynamicText: string = "WELCOME";
  /*scrolled: boolean = false;

  @HostListener('window:scroll', [])

  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrolled = scrollPosition > 0;
  }*/
}
