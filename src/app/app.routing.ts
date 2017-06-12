import { HomeComponent } from "./Dashboard/dashboard";
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
export const AppRoutes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { component: AddProjectComponent, path: "addProject" },
  { component: ViewProjectComponent, path: "viewproject" }
];
