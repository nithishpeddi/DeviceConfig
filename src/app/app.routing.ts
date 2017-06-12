import { DashboardComponent } from "./Dashboard/dashboard";
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { AccesseriesComponent } from './add-accesseries/accesseries';
import { ConfigComponent } from './add-config/addconfig';
export const AppRoutes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: "full" },
  { path: "Dashboard", component:DashboardComponent },
  { path: "addProject", component: AddProjectComponent },
  { path: "view-project", component: ViewProjectComponent, },
  { path: "add-accesseries", component: AccesseriesComponent },
  { path: "add-config", component: ConfigComponent }
];
