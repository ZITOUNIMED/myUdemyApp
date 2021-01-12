import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NodeModel } from '../models/node.model';
import { AppStoreService } from '../store/services/app-store.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  formations: NodeModel[];
  filtredFormations: NodeModel[];

  constructor(private activatedRoute: ActivatedRoute,
    private appStoreService: AppStoreService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const key = params && params['key'];
       if(key && this.formations && this.formations.length){
        this.filtredFormations = this.findInNodes(this.formations, key);
        console.log(this.filtredFormations);
       }
    });

    this.appStoreService.getFormations()
    .subscribe(formations => {
      this.formations = formations;
    });
  }

  private findInNodes(nodes: NodeModel[], key: string){
    return nodes.filter(node => {
      return node.name.toUpperCase().includes(key.toUpperCase());
    });
  }

}
