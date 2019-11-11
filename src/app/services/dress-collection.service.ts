import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class DressCollectionService {
  constructor(private http: HttpClient) {}

  public getDressCollection(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/dress-collection');
  }
}
