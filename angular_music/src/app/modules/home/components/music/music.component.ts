import { Component, OnInit } from '@angular/core';
import { ConstantService } from '../../services/constant.service';
import { HttpRequestService } from '../../services/http-request.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  Music:any;
  constructor(private _httpRequestService : HttpRequestService, public constant : ConstantService) { }

  ngOnInit(): void {
    this._httpRequestService.getMusic().subscribe(res => {
      console.log("res : ",res);
      this.Music = res;
    })
  }

}
