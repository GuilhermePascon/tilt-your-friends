import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Post: any;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  teste() {
    let data = {
      text: 'funciona'
    };

    this.http.get('127.0.0.1:8080/sample/').subscribe((response) => {
      this.Post = response;
    });

    console.log(this.Post);
  }

}
