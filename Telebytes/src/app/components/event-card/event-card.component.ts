import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../classes/post';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { response } from 'express';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})

export class EventCardComponent implements OnInit {
  public newPost: Post = new Post();
  events: any[] = [];
  isFormVisible: boolean = false; 

  constructor(private eventService: EventService, private postService: PostsService) { }

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

  postComment() {
    console.log("Prva funkcija:" + this.newPost.title);
    this.postService.postPost( this.newPost ).subscribe(
      (response) => {
        console.log("The task " + this.newPost.title + " has been added");
        console.log("component " + this.newPost._id);
      }
  );
  }
}
