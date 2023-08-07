import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
  })
export class TimelineComponent implements OnInit{
    @Input() events: any;
    @Input() width: any;
    
    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {

        
    }


}
