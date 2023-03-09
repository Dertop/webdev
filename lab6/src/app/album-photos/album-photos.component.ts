import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Photos } from '../modes';
import { PostService } from '../post.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photos[];
  loaded: boolean;
  savedId: number;

  constructor(private route: ActivatedRoute,
    private postService: PostService) {
    this.photos = [];
    this.loaded = true;
    this.savedId = -1;
  }

  ngOnInit(): void {

     this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.loaded = false;
        this.savedId = id;
        this.postService.getPhotos(id).subscribe((photos) => {
          this.photos = photos;
          this.loaded = true;
        })
      }
    });

  }

}
