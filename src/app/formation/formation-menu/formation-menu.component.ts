import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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
  @ViewChild('searchInput') searchInput: ElementRef;
  
  filtred: NodeModel[];

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

  get childrenToDisplay(){
    return this.filtred || this.children;
  }

  onSubmit(){
    const value = this.searchInput.nativeElement.value;
    if(value){
      const filtredParents = this.filterParents(this.children, value);
      const filtredChildren = this.filterChildren(this.children, value);
      this.filtred = this.mergeTwoLists(filtredParents, filtredChildren);
    } else {
      this.filtred = null;
    }
  }

  private filterParents(nodes: NodeModel[], key: string){
    return this.filterNodes(nodes, key);
  }

  private filterChildren(nodes: NodeModel[], key: string){
    const res = [];
    nodes.forEach(node => {
      const filtredChildren = this.filterNodes(node.children, key);
      if(filtredChildren && filtredChildren.length){
        res.push({
          ...node,
          children: filtredChildren
        });
      }
    });

    return res;
  }

  private mergeTwoLists(nodes1: NodeModel[], nodes2: NodeModel[]) {
    const map = new Map<string, NodeModel>();
    nodes1.forEach(node => {
      map.set(node.name, node);
    });

    nodes2.forEach(node => {
      map.set(node.name, node);
    });
    return Array.from(map.values());
  }

  private filterNodes(nodes: NodeModel[], key: string){
    return nodes.filter(node => {
      return node.name.toUpperCase().includes(key.toUpperCase());
    });
  }
  
}