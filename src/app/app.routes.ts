import { Routes } from '@angular/router';
import { MapComponent } from './componets/map/map.component';
import { NotFoundComponent } from './componets/shared/not-found/not-found.component';
import { LoginComponent } from './componets/login/login.component';
import {CalendatrComponent} from './componets/calendatr/calendatr.component';

export const ROUTES: Routes = [
    {path: 'map', component: MapComponent},
    {path: 'login', component: LoginComponent},
    {path: 'calendar', component: CalendatrComponent},
    {path: '404', component: NotFoundComponent},
    {path:'**', component: NotFoundComponent},
    {path:'', pathMatch:'full', redirectTo:'login'}
]
