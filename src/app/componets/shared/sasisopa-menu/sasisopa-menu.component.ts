import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sasisopa-menu',
  templateUrl: './sasisopa-menu.component.html',
  styleUrls: ['./sasisopa-menu.component.css']
})
export class SasisopaMenuComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goToMenu(){
    const id = this.route.snapshot.paramMap.get('id');
    const url = `/menu/${id}`
    this.router.navigate([url])
  }

}
