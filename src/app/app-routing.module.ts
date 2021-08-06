import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'service', component: ServiceComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
