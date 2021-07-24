import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
