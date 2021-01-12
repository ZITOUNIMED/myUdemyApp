import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  onSearch(){
    const value = this.searchInput.nativeElement.value;
    this.router.navigate(['/search-result', value], {relativeTo: this.activatedRoute});
  }

  

}
