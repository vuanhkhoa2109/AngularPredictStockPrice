import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { IndustryState } from '../../store/states/Industry.state';
import { Observable } from 'rxjs';
import { IndustryModel } from '../../models/IndustryModel';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-industry-detail',
  templateUrl: './industry-detail.component.html',
  styleUrls: ['./industry-detail.component.css']
})
export class IndustryDetailComponent implements OnInit {
  today = '20210111';
  @Select(IndustryState.active) selectedIndustry$: Observable<IndustryModel>;

  constructor() {
  }

  ngOnInit(): void {
  }

  parse(date: string): string {
    const list = Array<string>();
    list.push(date.slice(0, 4));
    list.push(date.slice(4, 6));
    list.push(date.slice(6, 8));
    return list.join('/');
  }

}
