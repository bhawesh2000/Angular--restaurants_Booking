import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leader : Leader[];

  constructor(private ledser:LeaderService) { }

  ngOnInit(): void {
    this.ledser.getLeaders().then((leadr)=>this.leader=leadr);
  }

}
