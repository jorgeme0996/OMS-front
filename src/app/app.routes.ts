import { Routes } from '@angular/router';
import { MapComponent } from './componets/map/map.component';
import { NotFoundComponent } from './componets/shared/not-found/not-found.component';
import { LoginComponent } from './componets/login/login.component';
import { AuthGuard } from './services/auth-guard.service'

export const ROUTES: Routes = [
    {path: 'map', canActivate: [AuthGuard],component: MapComponent},
    {path: 'login', component: LoginComponent},
    {path: '404', component: NotFoundComponent},
    {path:'**', component: LoginComponent},
    {path:'', pathMatch:'full', redirectTo:'404'}
]