import { Component, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  itemCount : number ;
  btntext : string = 'Add an item' ;
  goalText : string = 'My first text goal';
  goals = ['My first life goal','I want to climb a mountain','Go ice sking'];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addItem(){
      this.goals.push(this.goalText)
      this.goalText = '';
      this.itemCount = this.goals.length;
  }

}
