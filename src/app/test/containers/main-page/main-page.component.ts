import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddNumber, RemoveNumber } from '../../store/actions/test.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  numAdd: number;
  numDelete: number;
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addNumber(){
    this.store.dispatch(new AddNumber(this.numAdd));
  }
  deleteNumber() {
    this.store.dispatch(new RemoveNumber(this.numDelete));
  }
}
