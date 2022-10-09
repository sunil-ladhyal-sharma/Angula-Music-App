import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConstantService } from './constant.service';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http : HttpClient, private constant : ConstantService) { }

  getMusic(): Observable<any>{
    // const url = 'http://my-music-api.com/getMusic';
    // const url = 'https://sun-sha-api.000webhostapp.com/getMusic/';
      return this.http.get(this.constant.GetMusicApi);
  }
}
