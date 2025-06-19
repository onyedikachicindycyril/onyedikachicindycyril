import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  certificates = [
    {
      title: 'CompTIA Security Plus (SY0-701)',
      date: 'March 21, 2024',
      image: '../../../assets/comptia-cert.png'
    },
    {
      title: 'IriusRisk Certificate',
      date: 'March 1, 2024',
      image: '../../../assets/iriusrisk-cert.png'
    },
    {
      title: 'Google Cybersecurity Certificate',
      date: 'February 26, 2024',
      image: '../../../assets/google-cyber-cert.png'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
