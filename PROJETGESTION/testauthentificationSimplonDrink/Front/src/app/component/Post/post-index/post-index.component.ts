import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../service/post.service';
import { Post } from '../../../model/post';
@Component({
  selector: 'app-post-index',
  templateUrl: './post-index.component.html',
  styleUrls: ['./post-index.component.css']
})
export class PostIndexComponent implements OnInit {
 posts: Post[] = [];
  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }
    
  deletePost(_id?:string){
    if (!_id) return
    this.postService.delete(_id).subscribe(res => {
         this.posts = this.posts.filter(item => item._id !== _id);
         alert('Post deleted successfully!');
    })
  }
}

