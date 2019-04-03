import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

//Importar Servicios
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';


// Importar Rutas
import { ROUTES } from './app.routes';

// Importar Componentes
import { AppComponent } from './app.component';
import { PermisoCreComponent } from './componets/shared/permiso-cre/permiso-cre.component';
import { MapComponent } from './componets/map/map.component';
import { NotFoundComponent } from './componets/shared/not-found/not-found.component';
import { LoginComponent } from './componets/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PermisoCreComponent,
    MapComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBgmI1bWkGcebNPjwZpxSpCQ2yCWDGSJ1I" 
    })
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
