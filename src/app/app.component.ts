import { Component, OnInit } from '@angular/core';
import * as allNodes from '../assets/nodes.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nodes = (allNodes as any).default;

  options = {};

  ngOnInit(){
    console.log(this.nodes);
  }
  
  onEvent($event){
    console.log($event);
  }
}
