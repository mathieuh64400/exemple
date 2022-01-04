import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../model/post';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  _id: string='';
  post: any;
  form:any = FormGroup;
  
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this._id = this.route.snapshot.params['postId'];
    console.log(this._id);
    
    this.postService.find(this._id).subscribe((data: Post)=>{
    this.post = data;
    console.log(data, this.post)
    });
    
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      imgUrl: new FormControl('', Validators.required),
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.postService.update(this._id, this.form.value).subscribe(res => {
        alert('evenement updated successfully!');
         this.router.navigateByUrl('post');
    })
  }

}
