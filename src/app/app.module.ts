import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionComponent } from './components/option/option.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
