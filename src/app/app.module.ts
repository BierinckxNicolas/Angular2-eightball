import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { EightballComponent} from './eightball.component'
import { EightballService } from './eightball.service';

const appRoutes: Routes = [
  { path: '**', component: EightballComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule,
                RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, EightballComponent ],
  providers:    [ EightballService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
