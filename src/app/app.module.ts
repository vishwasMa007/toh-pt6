import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { HeroesComponent } from './heroes/heroes.component'
import { HeroSearchComponent } from './hero-search/hero-search.component'
import { MessagesComponent } from './messages/messages.component'
import { CustomcompComponent } from './customcomp/customcomp.component'
import { CustomcompSiblingComponent } from './customcomp-sibling/customcomp-sibling.component'
import { CustomcompchildComponent } from './customcompchild/customcompchild.component'
import { CustompipePipe } from './custompipe.pipe'
import { CustomcompSibling1Component } from './customcomp-sibling1/customcomp-sibling1.component'

@NgModule({
       imports: [
              BrowserModule,
              FormsModule,
              AppRoutingModule,
              HttpClientModule,

              // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
              // and returns simulated server responses.
              // Remove it when a real server is ready to receive requests.
              // HttpClientInMemoryWebApiModule.forRoot(
              //   InMemoryDataService, { dataEncapsulation: false }
              // )
       ],
       declarations: [
              AppComponent,
              DashboardComponent,
              HeroesComponent,
              HeroDetailComponent,
              MessagesComponent,
              HeroSearchComponent,
              CustomcompComponent,
              CustomcompSiblingComponent,
              CustomcompchildComponent,
              CustompipePipe,
              CustomcompSibling1Component,
       ],
       bootstrap: [AppComponent],
})
export class AppModule {}
