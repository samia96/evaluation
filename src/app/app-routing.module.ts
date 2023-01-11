import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelEvalComponent } from './components/hotel-eval/hotel-eval.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ReportingOneComponent } from './components/reporting-one/reporting-one.component';
import {ResultatEvalComponent} from "./components/hotel-eval/resultat-eval.component";

const routes: Routes = [
  { path: 'hotel', component: HotelComponent},
  { path: '', component: HotelEvalComponent},
  { path: 'resultat', component: ResultatEvalComponent },
  { path: 'reporting_globale', component: ReportingOneComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
