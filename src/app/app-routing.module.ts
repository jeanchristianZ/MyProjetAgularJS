import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApropoComponent } from './apropo/apropo.component';
import { ArachideComponent } from './arachide/arachide.component';
import { CharbonComponent } from './charbon/charbon.component';
import { DocComponent } from './doc/doc.component';
import { HiricotComponent } from './hiricot/hiricot.component';
import { HomeComponent } from './home/home.component';
import { MaisComponent } from './mais/mais.component';
import { PoiCapComponent } from './poi-cap/poi-cap.component';
import { TechnoAddComponent } from './techno-add/techno-add.component';
import { TechnoListComponent } from './techno-list/techno-list.component';
import { TraitementComponent } from './traitement/traitement.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'techno-add', component: TechnoAddComponent},
  { path: 'apropo', component: ApropoComponent},
  { path: 'doc', component: DocComponent},
  { path: 'traitement', component: TraitementComponent},
  { path: 'all-technos', component: TechnoListComponent},
  { path: 'charbon', component: CharbonComponent},
  { path: 'hiricot', component: HiricotComponent},
  { path: 'mais', component: MaisComponent},
  { path: 'poi-cap', component: PoiCapComponent},
  { path: 'arachide', component: ArachideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
