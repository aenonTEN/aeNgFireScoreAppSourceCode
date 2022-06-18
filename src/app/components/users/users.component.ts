import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: any;
  name!: string;
  age!: number;
  score!: number;

  row!: any;

  courses!: any;
  
  displayedColumns: string[] = ['name', 'age', 'score'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private db: AngularFireDatabase) { 
    const users = db.list('/courses').valueChanges()
    .subscribe(res=>{

      this.courses=res;
      console.log(res)
      this.dataSource = new MatTableDataSource(res)

      const winners = db.list('/winners').valueChanges()
      .subscribe(res=>{
        console.log(res);
      })
      

    }

    )

    

    
  }
 

  ngOnInit(): void {
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


 

  navToWinner(row: any){

    if(    confirm("Are you sure you wanna add this user to winners?")
    ){
      // this.addToWinners(row);
      console.log(row)

      const winners = this.db.list('/winners')
      winners.push(row);
      

      
      
    
    }else{
      alert("Cancel?")
    }

  }

  // addToWinners(row: any, db: AngularFireDatabase){
  //   db.list('/winners').update(row)
    
  // }

}
