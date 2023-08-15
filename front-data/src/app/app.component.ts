import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-data';
  data : any [] =[]

  constructor(private http: HttpClient) {
        
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8080/data").subscribe((data: any) => {
      console.log(data)
      this.data = data;
    },(err:HttpErrorResponse)=>{
      console.log(err)
    })
  }
}
