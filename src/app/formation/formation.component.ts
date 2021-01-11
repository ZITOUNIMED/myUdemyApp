import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NodeModel } from '../models/node.model';
import { FormationService } from '../services/formation.service';
import { VideosService } from '../services/videos.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  videoUrl = '';
  videoName = '';
  formation: NodeModel;

  constructor(private videoService: VideosService,
    private formationService: FormationService,
    private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.data.subscribe(data => {
      this.formation = data.formation;
    });
  }

  nodeCheckedChanged($event){
    const parent = this.formation.children
    .find(node => node.name === $event.parent);
    if(parent){
      const child = parent.children.find(node => node.name === $event.child);
      if(child){
        child.checked=$event.checked;
        this.formationService.saveFormation(this.formation).subscribe(res => {});
      }
    }
  }

  videoPathChanged($event: { videoName: string, path: string}){
    this.videoUrl = '';
    this.videoService.generateVideoUrl('/' + this.formation.name + $event.path).subscribe(res => {
      this.videoUrl = res.url;
	  
	  this.videoName = $event.videoName;
    });
  }

  intOrResetFormation(formation){
    this.formationService.intOrResetFormation(formation.name)
    .subscribe(res => {
      this.formation = res;
    });
  }

}
