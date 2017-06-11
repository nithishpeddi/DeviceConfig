import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DeviceComponent } from './device.comp';
import { RouterModule } from '@angular/router';
import { AppRoutes } from '../dashboard.routes';
import { ProjectService } from './device.service';
@NgModule({
  declarations: [
    DeviceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, RouterModule
  ],
  providers: [ProjectService],

})
export class DeviceModule { }
