import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  @ViewChild('directoryRootElt') directoryRootElt: ElementRef;
  directoryRoot: string;

  constructor(private configService: ConfigService) { }

  ngOnInit(){
    this.configService.getDirectoryRoot().subscribe(res => {
      this.directoryRoot = res.directoryRoot;
    });
  }

  changeRoot(){
    const directoryRoot = this.directoryRootElt.nativeElement.value;
    this.configService.changeDirectoryRoot(directoryRoot).subscribe(res => {
      this.directoryRoot = res.directoryRoot;
    });
    
  }
}