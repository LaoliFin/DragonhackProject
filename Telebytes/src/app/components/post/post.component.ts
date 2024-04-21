import { Component, OnInit, TemplateRef } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/classes/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['../event-card/event-card.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostsService) {}
  ngOnInit(): void {
    this.getPosts();
  }

  protected posts!: Post[];
  protected isLiked = false;
  protected isDisliked = false;

  private getPosts() {
    this.postService
      .getEventPosts()
      .subscribe((posts) => {
        this.posts = posts.map((post: any) => {
          return post as Post;
        });
      });
  }

  public increaseLikes(id:string) {
      this.postService
      .likePost(id)
      .subscribe(() => {
        this.getPosts();
      });
  }


  public decreaseLikes(id:string) {
    this.postService
    .dislikePost(id)
    .subscribe(() => {
      this.getPosts();
    });
}
  }
