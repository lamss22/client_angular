import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StaffService } from 'src/app/service/staff.service';
import { Staff } from 'src/app/models/staff';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit{

  constructor(private router: Router,private staffService: StaffService) {}

  ngOnInit(): void {

  }

  onCreate(staff:Staff){
    this.staffService.addStaff(staff).subscribe(result => {
      console.log(result);
    })
    window.location.href= "";
  }
}
