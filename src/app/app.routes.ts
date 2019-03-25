import { Routes } from '@angular/router';
import { MapComponent } from './componets/map/map.component';
import { NotFoundComponent } from './componets/shared/not-found/not-found.component';

export const ROUTES: Routes = [
    {path: 'map', component: MapComponent},
    {path:'**', component: NotFoundComponent},
    {path:'', pathMatch:'full', redirectTo:'map'}
]
