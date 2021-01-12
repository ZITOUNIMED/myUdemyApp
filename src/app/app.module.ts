import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeModule } from '@circlon/angular-tree-component';
import { StoreModule } from '@ngrx/store';

import { FormationComponent } from './formation/formation.component';
import { HeaderComponent } from './header/header.component';
import { ConfigComponent } from './config/config.component';
import { FormationMenuComponent } from './formation/formation-menu/formation-menu.component';
import { ListFormationsComponent } from './list-formations/list-formations.component';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { formationsReducer } from './store/reducers/formations.reducer';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    HeaderComponent,
    ConfigComponent,
    FormationMenuComponent,
    ListFormationsComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TreeModule,
    StoreModule.forRoot({
      formations: formationsReducer,
    }),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
