import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = false;
  constructor() { }

  ngOnInit(): void {
  }

  public hidePassword():void{
    this.hide = !this.hide
    
  }

}
