import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { OneWayDemoComponent } from './components/testing-components/one-way-demo/one-way-demo.component';
import { TwoWayDemoComponent } from './components/testing-components/two-way-demo/two-way-demo.component';
import { FormsModule } from '@angular/forms';
import { EventPropBindingComponent } from './components/testing-components/event-prop-binding/event-prop-binding.component';
import { StructuralDirectivesComponent } from './components/testing-components/structural-directives/structural-directives.component';
import { AtributeDirectiveComponent } from './components/testing-components/atribute-directive/atribute-directive.component';
import { RoutingModule } from './components/routing.module';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ParentGuard } from 'src/guard/parent.guard';
import { ChildGuard } from 'src/guard/child.guard';
import { MoviesResolver } from 'src/resolvers/movies.resolver';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    DetailsPageComponent,
    OneWayDemoComponent,
    TwoWayDemoComponent,
    EventPropBindingComponent,
    StructuralDirectivesComponent,
    AtributeDirectiveComponent,
    LoginComponent,
    MoviesComponent,
    WatchListComponent,
    HomeComponent,
    MovieDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule, RoutingModule, BrowserAnimationsModule],
  providers: [ParentGuard, ChildGuard, MoviesResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
