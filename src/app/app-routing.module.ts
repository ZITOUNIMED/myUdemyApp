import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { FormationComponent } from './formation/formation.component';
import { ListFormationsComponent } from './list-formations/list-formations.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FomationResolverService } from './services/formation.resolver.service';

const routes: Routes = [
  {path: 'formations', component: ListFormationsComponent},
  {
    path: 'formation/:name', 
    component: FormationComponent,
    resolve: {
      formation: FomationResolverService
    }
  },
  {path: 'config', component: ConfigComponent},
  {path: 'search-result', component: SearchResultComponent},
  {path: 'search-result/:key', component: SearchResultComponent},
  {path: '',   redirectTo: '/formations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
