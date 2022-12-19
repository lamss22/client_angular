import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit{

  staff: Array<any> = [];
  constructor(private staffService: StaffService) {}

   ngOnInit(): void {
     this.staffService.getStaff().subscribe(data => {
      this.staff =data;
      console.log(this.staff);
      
     })
   }

   onDelete(id:number) {
    this.staffService.deleteStaff(id).subscribe(result => {
      console.log(result);
      
    })
    window.location.reload();
   }
}
