import { Component, OnInit } from '@angular/core';
import {Post} from '../../../model/post';
import { PostService } from "../../../service/post.service";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  events:Post[]=[];
  searchTermevent:string='';
  constructor(public postService: PostService) { }
  ngOnInit(): void {
    this.postService.getAll().subscribe((data:Post[])=>{
      this.events=data;
      console.log(this.events);
      
    })
  }

}
