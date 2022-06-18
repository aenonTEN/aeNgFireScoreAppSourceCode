import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.scss']
})
export class ToppersComponent implements OnInit {

  users!: any[];
  name!: string;
  age!: number;
  score!: number;

  scoreCut: number =90;

  courses!: any;
  
  displayedColumns: string[] = ['name', 'age', 'score'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(db: AngularFireDatabase) { 
    db.list('/courses').valueChanges()
    .subscribe(res=>{

      this.courses=res;
      console.log(res)
      this.dataSource = new MatTableDataSource(res)

    }

    )
  }

  ngOnInit(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


}
