import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-work-search',
  templateUrl: './work-search.component.html',
  styleUrls: ['./work-search.component.scss']
})
export class WorkSearchComponent implements OnInit {


  private searchTerms = new Subject<string>();
  workOrder$!: Observable<any>;
  constructor(private workService: WorkService) { }


  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.workOrder$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.workService.searchWorkOrderId(term)),
    )
  }

  
  
}
