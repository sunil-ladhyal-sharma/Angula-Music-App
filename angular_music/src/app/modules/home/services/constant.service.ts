import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  /* This service is used to create constant or api in our project */
  Url = "https://sun-sha-api.000webhostapp.com";
  GetMusicApi = this.Url+'/getMusic/';

  constructor() {


   }
}
