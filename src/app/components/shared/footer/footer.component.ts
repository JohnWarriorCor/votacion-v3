import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../services/token.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  today = new Date();
  token: boolean = false;

  constructor(public tokenService: TokenService) { }

  ngOnInit(): void {
  }

  changeView(){
    this.token = !this.token;
    this.tokenService.setTitle(this.token);
  }

}
