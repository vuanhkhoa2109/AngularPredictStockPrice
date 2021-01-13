import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  fruits = [
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
    'Yasuo',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
