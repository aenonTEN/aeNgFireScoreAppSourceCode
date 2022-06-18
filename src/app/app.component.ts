import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebaseDemo';
  courses!: any[];

  constructor(db: AngularFireDatabase){
    db.list('/courses').valueChanges()
    .subscribe(res=>{
      this.courses = res
      console.log(this.courses)

    }

    )


  }
}
