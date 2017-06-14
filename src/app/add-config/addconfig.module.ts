import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { ConfigComponent } from '../add-config/addconfig';
import { AppRoutes } from '../app.routing';
import { MyDatePickerModule } from 'mydatepicker';


@NgModule({
    declarations: [ConfigComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule, MyDatePickerModule,

        RouterModule.forRoot(AppRoutes),
    ],
    providers: [],

})
export class AddConfigModule { }
