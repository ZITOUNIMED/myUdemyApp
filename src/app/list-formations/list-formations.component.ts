import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-list-formations',
  templateUrl: './list-formations.component.html',
  styleUrls: ['./list-formations.component.css']
})
export class ListFormationsComponent implements OnInit {
  activeName = '';

  formations = [];

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.formationService.loadFormations()
    .subscribe(formations => {
      this.formations = formations;
    });
  }

  changeActiveItem(name){
    this.activeName = name;
  }

  prepareFormations(){
    this.formationService.prepareFormations()
    .subscribe(formations => {
      this.formations = formations;
    });
  }

}
