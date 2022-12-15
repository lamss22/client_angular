import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './component/insert/insert.component';
import { ProductComponent } from './component/product/product.component';
import { StaffComponent } from './component/staff/staff.component';
import { UpdateComponent } from './component/update/update.component';

const routes: Routes = [
  { path: '', component: StaffComponent },
  {path: 'add', component:InsertComponent},
  {path: 'update/:id',component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule, CommonModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
