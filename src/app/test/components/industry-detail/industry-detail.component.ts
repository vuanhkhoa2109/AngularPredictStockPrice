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
  @Select(IndustryState.active) selectedIndustry$: Observable<IndustryModel>;

  constructor() {
  }

  ngOnInit(): void {
  }
}
