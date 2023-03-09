import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Albums } from '../modes'
import { PostService } from '../post.service'

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  
  album: Albums;
  loaded: boolean;
  inputTitle: string;

  constructor(private route: ActivatedRoute,
              private postService: PostService) {
    this.album = {} as Albums;
    this.loaded = true;
    this.inputTitle = this.album.title;
  }

  Save(){
      this.album.title = this.inputTitle;
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.loaded = false;
        this.postService.getAlbum(id).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        })
      }
    });

  }
}
