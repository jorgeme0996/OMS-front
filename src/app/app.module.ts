import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';


// Importar Rutas
import { ROUTES } from './app.routes';

// Importar Componentes
import { AppComponent } from './app.component';
import { PermisoCreComponent } from './componets/shared/permiso-cre/permiso-cre.component';
import { MapComponent } from './componets/map/map.component';
import { NotFoundComponent } from './componets/shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PermisoCreComponent,
    MapComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBgmI1bWkGcebNPjwZpxSpCQ2yCWDGSJ1I" 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
