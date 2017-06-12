import { HomeComponent } from "./Dashboard/dashboard";
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { AccesseriesComponent } from './add-accesseries/accesseries';
export const AppRoutes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "addProject",component: AddProjectComponent },
  {path: "viewproject", component: ViewProjectComponent,  },
  { path: "add-accesseries", component: AccesseriesComponent }
];
