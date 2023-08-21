import { Component , OnInit } from '@angular/core';
import { DataService , UserData } from "../data.service";
import { map , Observable , tap } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: UserData[] = [];
  selectedStatus: string[] = [];
  displayedColumns: string[] = [];
  filteredData = new MatTableDataSource<UserData>([]);
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getMockData().pipe(
      tap(data => {
        this.data = data;
        this.filteredData = new MatTableDataSource<UserData>(data)
        this.displayedColumns = [...Object.keys(data[0])]
      })
    ).subscribe()
  }

  onOptionChange() {
    if (this.selectedStatus.length) {
      const filterData = this.data.filter(item => this.selectedStatus.includes(item.status))
      this.filteredData = new MatTableDataSource(filterData)
    } else {
      this.filteredData = new MatTableDataSource(this.data);
    }
  }
}
