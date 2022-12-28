import { Component, OnInit } from '@angular/core';
import { ServicesService } from './Services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random';
  details: any
  randomIndex: any = Math.floor(Math.random() * 30)
  randomDetails: any
  constructor(private api: ServicesService) { }


  ngOnInit(): void {
    this.displayDetails()
  }

  displayDetails() {
    console.log('hello');

    this.api.getAllDetails().subscribe((data: any) => {
      console.log(data.users);
      this.details = data.users
      this.randomDetails = this.details[this.randomIndex]
    })
  }


  click() {
    window.location.reload()
    this.displayDetails()
    console.log(this.randomIndex);

  }

}
