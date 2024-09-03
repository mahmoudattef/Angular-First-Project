import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full' },
    {path:'home',component:HomeComponent, title:'Home'},
    {path:'about',component:AboutComponent,title:'About'},
    {path:'portfolio',component:PortfolioComponent,title:'portfolio'},
    {path:'contact',component:ContactComponent,title:'contact'},
    {path:'**',component:NotfoundComponent,title:'NotFount'},

];
