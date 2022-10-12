import { Component, OnInit } from '@angular/core';
import { WorkService } from '../work.service';
import { WorkSearchComponent } from '../work-search/work-search.component';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  public tasksList: any = [];

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.getAllWork();
  }

  getAllWork(): void {
    this.workService.getWorkjson().subscribe(res=>{
      //console.log(res.response.data);
      this.tasksList = res.response.data;
    });
  }

  

}
