import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { InsertComponent } from './component/insert/insert.component';
import { UpdateComponent } from './component/update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffComponent } from './component/staff/staff.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    InsertComponent,
    UpdateComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
