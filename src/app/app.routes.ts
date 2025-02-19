import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ToolspageComponent } from './pages/toolspage/toolspage.component';
import { AboutuspageComponent } from './pages/aboutuspage/aboutuspage.component';
import { ContactuspageComponent } from './pages/contactuspage/contactuspage.component';

export const routes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: 'tools', component: ToolspageComponent },
    { path: 'about', component: AboutuspageComponent },
    { path: 'contact', component: ContactuspageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' } 
  ];
