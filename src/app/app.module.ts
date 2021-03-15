import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TechnoAddComponent } from './techno-add/techno-add.component';
import { ApropoComponent } from './apropo/apropo.component';
import { DocComponent } from './doc/doc.component';
import { TraitementComponent } from './traitement/traitement.component';
import { TechnoListComponent } from './techno-list/techno-list.component';
import { FooterComponent } from './footer/footer.component';
import { CharbonComponent } from './charbon/charbon.component';
import { NavMenuJourComponent } from './nav-menu-jour/nav-menu-jour.component';
import { HiricotComponent } from './hiricot/hiricot.component';
import { MaisComponent } from './mais/mais.component';
import { PoiCapComponent } from './poi-cap/poi-cap.component';
import { ArachideComponent } from './arachide/arachide.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechnoAddComponent,
    ApropoComponent,
    DocComponent,
    TraitementComponent,
    TechnoListComponent,
    FooterComponent,
    CharbonComponent,
    NavMenuJourComponent,
    HiricotComponent,
    MaisComponent,
    PoiCapComponent,
    ArachideComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { 

}
