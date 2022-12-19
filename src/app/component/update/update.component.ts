import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/models/staff';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  constructor(private staffService: StaffService, private routeactive: ActivatedRoute, private router: Router) {}

  id: number = 0;
  staff : Staff = new Staff();
  checkedTrue: any = "";
  checkedFalse: any = "";
  ngOnInit(): void {
    this.id = this.routeactive.snapshot.params['id'];
    this.staffById();
  }

  staffById(){
    this.staffService.getStaffById(this.id).subscribe(data => {
      this.staff.id = data.id;
      this.staff.name= data.name;
      this.staff.birthday = data.birthday;
      this.staff.salary = data.salary;
      this.staff.email = data.email;
      this.staff.gender = data.gender;

      data.status == true ? this.checkedTrue = "" : "";
      data.status == false ? this.checkedFalse = "" : "";
    })
  }
  onUpdate(staff:Staff){
    this.staffService.updateStaff(this.id, staff).subscribe(result => {
      console.log(result);
      
    })
    window.location.href= "";
  }
}
