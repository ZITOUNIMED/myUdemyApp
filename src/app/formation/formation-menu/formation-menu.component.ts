import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoadNodeData } from 'src/app/models/load-node-data.model';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'app-formation-menu',
  templateUrl: './formation-menu.component.html',
  styleUrls: ['./formation-menu.component.css']
})
export class FormationMenuComponent {
  @Input() children: NodeModel[];
  @Output() nodeSelected = new EventEmitter<LoadNodeData>();
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
    const ext = $event.node.data.ext;
    if (ext === '.mp4'){
      const path = this.getPath($event.node);
      const value = { 
        name: $event.node.data.name, 
        path: path + '.mp4',
        ext: '.mp4',
      };
      this.nodeSelected.emit(value);
    } else if(ext === '.html'){
      const path = this.getPath($event.node);
      const value = { 
        name: $event.node.data.name, 
        path: path + '.html',
        ext: '.html',
      };
      this.nodeSelected.emit(value);
    }
    
  }

  getPath(node){
    return (node.parent && node.parent.data.name? this.getPath(node.parent) : '') + '/'+node.data.name;
  }

}