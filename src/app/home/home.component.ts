import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: { class: 'w-full min-h-screen bg-[#f9f9f9] ' },
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
