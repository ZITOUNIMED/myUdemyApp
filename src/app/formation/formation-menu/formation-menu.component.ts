import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'app-formation-menu',
  templateUrl: './formation-menu.component.html',
  styleUrls: ['./formation-menu.component.css']
})
export class FormationMenuComponent {
  @Input() children: NodeModel[];
  @Output() videoPathChange = new EventEmitter<string>();
  @Output() nodeCheckedChange = new EventEmitter<{parent: string, child: string, checked: boolean}>();
  options: any;

  constructor() { }

  checkboxChanged(node){
    node.data.checked = !node.data.checked;
    this.nodeCheckedChange.emit({
      parent: node.parent.data.name,
      child: node.data.name,
      checked: node.data.checked
    });
  }

  selectNode($event){
    if ($event.node.data.ext === '.mp4'){
      const videoPath = this.getPath($event.node);
      this.videoPathChange.emit(videoPath + '.mp4');
    }
    
  }

  getPath(node){
    return (node.parent && node.parent.data.name? this.getPath(node.parent) : '') + '/'+node.data.name;
  }

}