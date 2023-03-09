import { Component, OnInit } from '@angular/core';
import { Albums } from '../modes';
import { PostService } from '../post.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Albums[];

   constructor(private postService: PostService) {
    this.albums = [];
  }

  ngOnInit(): void {
    this.postService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  remove(i: Albums) {
    let indx = this.albums.findIndex(j => j.id === i.id);
    this.albums.splice(indx, 1);
  }
}
