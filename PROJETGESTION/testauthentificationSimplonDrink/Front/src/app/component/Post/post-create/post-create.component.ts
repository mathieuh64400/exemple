import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PostService } from 'src/app/service/post.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  form:any=  FormGroup;
  constructor(   public postService: PostService,
    private router: Router) { }

    ngOnInit(): void {
      this.form = new FormGroup({
        title: new FormControl('', [Validators.required]),
        author: new FormControl('', Validators.required),
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
      this.postService.create(this.form.value).subscribe(res => {
           console.log('Event created successfully!');
           this.router.navigateByUrl('post');
      })
    }

}
