import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor(private meta: Meta, private title: Title) {
  this.title.setTitle('Onyedikachi – Certified Cyber Security Professional | Network Security | Incident Response | Risk Management');

  this.meta.addTags([
    {
      name: 'description',
      content:
        'Hire Onyedikachi – a certified Cyber Security Professional with expertise in network security, vulnerability assessments, incident response, and risk management. Certified in CompTIA Security+, Tech+, and Digital Literacy Pro. Helping businesses protect digital assets and reduce cyber threats.'
    },
    {
      name: 'keywords',
      content:
        'Cyber Security Professional, Network Security, Incident Response, Risk Management, Vulnerability Assessment, Cybersecurity Specialist, CompTIA Security+, Tech+ Certified, Security Awareness Training, Cybersecurity Nigeria, Digital Risk Consulting, Phishing Prevention, Security Best Practices, IT Compliance, Digital Forensics'
    },
    { name: 'author', content: 'Onyedikachi' },
    {
      property: 'og:title',
      content: 'Onyedikachi – Certified Cyber Security Professional for Hire'
    },
    {
      property: 'og:description',
      content:
        'Work with Onyedikachi – a trusted cybersecurity expert skilled in safeguarding networks, managing incidents, and assessing security risks. Proven experience delivering security awareness training and building cyber-resilient organizations.'
    },
    {
      property: 'og:image',
      content: 'https://onyedikachicindycyril.github.io/onyedikachicindycyril/assets/images/logo/logo1.png' 
    },
    { property: 'og:url', content: 'https://onyedikachicindycyril.github.io/onyedikachicindycyril' }
  ]);
}

}
