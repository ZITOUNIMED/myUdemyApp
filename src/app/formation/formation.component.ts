import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadNodeData } from '../models/load-node-data.model';
import { NodeModel } from '../models/node.model';
import { FilesService } from '../services/files.service';
import { FormationService } from '../services/formation.service';
import { VideosService } from '../services/videos.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  selectedNodeData: LoadNodeData;

  videoUrl = '';
  nodeName = '';
  formation: NodeModel;
  fileContent = '';

  constructor(private videoService: VideosService,
    private formationService: FormationService,
    private activatedRoute: ActivatedRoute,
    private filesService: FilesService){}

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

  nodeSelected($event: LoadNodeData){
    const directory = '/' + this.formation.name + $event.path;
    if(['.mp4', '.html'].some(ext => ext === $event.ext)){
      this.reset();
      this.nodeName = $event.name;
      this.selectedNodeData = $event;
      
      if($event.ext === '.mp4'){
        this.videoService.generateVideoUrl(directory).subscribe(res => {
          this.videoUrl = res.url;
        });
      } else if($event.ext){
        this.filesService.loadFileContent(directory).subscribe(res => {
          this.fileContent = res.content;
        });
      }
    }
    
    
  }

  private reset(){
    this.selectedNodeData = null;
    this.videoUrl = '';
    this.fileContent = '';
  }

  intOrResetFormation(formation){
    this.formationService.intOrResetFormation(formation.name)
    .subscribe(res => {
      this.formation = res;
    });
  }

}
