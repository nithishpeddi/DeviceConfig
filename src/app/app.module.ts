import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { AppRoutes } from "./app.routing";
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from "./Dashboard/dashboard";
import { AddProjectComponent } from './add-project/add-project.component';
import { MyDatePickerModule } from 'mydatepicker';
import { SendDataService } from './Services/send-data.service';
import { ViewProjectComponent } from './view-project/view-project.component';



@NgModule({
  declarations: [
    AppComponent,NavigationComponent,HomeComponent,AddProjectComponent,ViewProjectComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [SendDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
