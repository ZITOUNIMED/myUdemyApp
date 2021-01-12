import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NodeModel } from '../models/node.model';

import { FormationService } from '../services/formation.service';
// import { AppStoreService } from '../store/services/app-store.service';

@Component({
  selector: 'app-list-formations',
  templateUrl: './list-formations.component.html',
  styleUrls: ['./list-formations.component.css']
})
export class ListFormationsComponent implements OnInit {
  activeName = '';
  @ViewChild('searchInput') searchInput: ElementRef;

  formations = [];
  filtred: NodeModel[];

  constructor(private formationService: FormationService,
    //private appStoreService: AppStoreService
    ) { }

  ngOnInit(): void {
    this.formationService.loadFormations()
    .subscribe(formations => {
      this.formations = formations;
      //this.appStoreService.setFormations(formations);
    });
  }

  get formationsToDisplay(){
    return this.filtred || this.formations;
  }

  onSubmit(){
    const value = this.searchInput.nativeElement.value;
    if(value && this.formations){
      this.filtred = this.filterNodes(this.formations, value);
    } else {
      this.filtred = null;
    }
  }
  
  private filterNodes(nodes: NodeModel[], key: string){
    return nodes.filter(node => {
      return node.name.toUpperCase().includes(key.toUpperCase());
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


/*
childrenTests: NodeModel[] = [
  {
    id: 1,
    name: 'f1 n',
    children: [{id: 2, name: 'f11'}, {id: 3, name: 'f12 n'}]
  },
  {
    id: 4,
    name: 'f2',
    children: [{id: 5, name: 'f21 n'}, {id: 6, name: 'f22'}]
  },
  {
    id: 7,
    name: 'f3 n',
    children: [{id: 8, name: 'f31 n'}, {id: 9, name: '32'}, {id: 10, name:'f33 n'}]
  },
  {
    id: 11,
    name: 'f4 n',
    children: []
  },
  {
    id: 12,
    name: 'f5',
    children: [{id: 13, name: 'f51'}, {id: 14, name: 'f52'}]
  },
];
*/