import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelComponent } from './travel/travel.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'travel', component: TravelComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
