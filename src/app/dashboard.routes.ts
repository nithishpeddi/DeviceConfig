import { Routes } from '@angular/router';
import { DashComponent } from './dashboard';
import { DeviceComponent } from './Device/device.comp'
import { SubDeviceComponent } from './Sub-Device/subdevice';

export const AppRoutes: Routes = [

    { path: '', redirectTo: 'App', pathMatch: 'full' },
    // { path: 'App', component: DashComponent },
    { path: 'Device', component: DeviceComponent },
   
    { path: 'Sub-Device', component: SubDeviceComponent },

]



