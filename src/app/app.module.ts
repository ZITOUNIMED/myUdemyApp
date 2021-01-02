import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeModule } from '@circlon/angular-tree-component';
import { FormationComponent } from './formation/formation.component';
import { HeaderComponent } from './header/header.component';
import { ConfigComponent } from './config/config.component';
import { FormationMenuComponent } from './formation/formation-menu/formation-menu.component';
import { ListFormationsComponent } from './list-formations/list-formations.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    HeaderComponent,
    ConfigComponent,
    FormationMenuComponent,
    ListFormationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
