import { Component } from '@angular/core';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {
  title=""
  venue=""
  descrip=""
  duration=""
  date=""

  readValues=()=>{
    let data:any={title:this.title,
    venue:this.venue,descrip:this.descrip,
    duration:this.duration,date:this.date
  }
  }
}
