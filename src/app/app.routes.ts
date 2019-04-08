import { Routes } from '@angular/router';
import { MapComponent } from './componets/map/map.component';
import { NotFoundComponent } from './componets/shared/not-found/not-found.component';
import { LoginComponent } from './componets/login/login.component';
import {CalendatrComponent} from './componets/calendatr/calendatr.component';
import { AuthGuard } from './services/auth-guard.service'
import { SasisopaMenuComponent } from './componets/shared/sasisopa-menu/sasisopa-menu.component';
import { MenuGasComponent } from './componets/menu-gas/menu-gas.component';

export const ROUTES: Routes = [
    {path: 'map', canActivate: [AuthGuard],component: MapComponent},
    {path: 'login', component: LoginComponent},
    {path: 'calendar', component: CalendatrComponent},
    {path: '404', component: NotFoundComponent},
    {path: 'menu/:id', canActivate: [AuthGuard], component: MenuGasComponent},
    {path: 'SASISOPA/menu/:id', canActivate: [AuthGuard], component: SasisopaMenuComponent},
    {path:'**', component: LoginComponent},
    {path:'', pathMatch:'full', redirectTo:'404'}
]