import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Albums, Photos} from "./modes";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Albums[]>{
    return this.client.get<Albums[]>(`https://jsonplaceholder.typicode.com/albums`);
  }

  getAlbum(id: number): Observable<Albums>{
    return this.client.get<Albums>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }

  getPhotos(id: number): Observable<Photos[]>{
    return this.client.get<Photos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/Photos`)
  }
}
