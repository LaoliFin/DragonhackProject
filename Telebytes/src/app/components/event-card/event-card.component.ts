import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})

export class EventCardComponent implements OnInit {
  events: any[] = [];
  isFormVisible: boolean = false; 

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.eventService.getEvents().subscribe({
      next:(data) => {
        this.events = data;
      },
      error:(error) => {
        console.error('Error fetching events:', error);
      }
    });
  }

  showForm(): void { 
    this.isFormVisible = !this.isFormVisible;
  }
}

