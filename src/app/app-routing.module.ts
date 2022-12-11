import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './components/hotel/hotel.component';
import { ReportingOneComponent } from './components/reporting-one/reporting-one.component';

const routes: Routes = [
  { path: 'hotel', component: HotelComponent},
  { path: 'reporting_globale', component: ReportingOneComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
