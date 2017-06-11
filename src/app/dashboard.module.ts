import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashComponent } from './dashboard';
import { DeviceModule } from './Device/device.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './dashboard.routes';
import { SubDeviceModule } from './Sub-Device/subdevice.module';

@NgModule({
  declarations: [
    DashComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, RouterModule.forRoot(AppRoutes),
    HttpModule, SubDeviceModule, DeviceModule,
  ],
  providers: [],
  bootstrap: [DashComponent]
})
export class AppModule { }
