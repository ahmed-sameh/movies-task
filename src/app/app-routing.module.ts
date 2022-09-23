import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path: "auth",component: AuthComponent},
  {path: "", component: LayoutComponent,    loadChildren: () =>
  import("./components/components.module").then((m) => m.ComponentsModule),
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
