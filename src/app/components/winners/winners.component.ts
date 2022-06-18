import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {

  users!: any[];
  name!: string;
  age!: number;
  score!: number;

  courses!: any;
  
  displayedColumns: string[] = ['name', 'score'];
  dataSource!: MatTableDataSource<any>;
  // @ViewChild(MatSort) sort!: MatSort;


  constructor(db: AngularFireDatabase) { 
    db.list('/winners').valueChanges()
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
