import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsblock',
  templateUrl: './newsblock.component.html',
  styleUrls: ['./newsblock.component.scss']
})
export class NewsblockComponent implements OnInit {
  @Input() name=''
  constructor() { }

  ngOnInit(): void {
  }

}
