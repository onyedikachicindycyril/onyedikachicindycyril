import { Form } from './../model/form';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Form } from '../model/form';
import { FormdataService } from '../services/formdata.service';
import { NotificationService } from '../services/notification.service';

FormdataService
Form

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
  formData!: Form;
  contactForm: FormGroup;
  isMenuOpen = false;
  isMenuClosed = true;


  constructor(private fb: FormBuilder, private sc: FormdataService, private ns: NotificationService) {
    this.contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(4)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  }
);}

  ngOnInit(): void {

  }
toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngAfterViewInit() {
     const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.getElementById('navbarSupportedContent');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse?.classList.contains('show')) {
        // Collapse the navbar
        (document.querySelector('.navbar-toggler') as HTMLElement)?.click();
      }
    });
  });


  // fade-in-observer.ts
document.addEventListener('DOMContentLoaded', () => {
  const observer: IntersectionObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    { threshold: 0.2 }
  );

  const animatedElements: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down'
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});

}

closeNavbar(): void {
  const navbarCollapse = document.getElementById('navbarSupportedContent');
  const toggler = document.querySelector('.navbar-toggler') as HTMLElement;

  if (navbarCollapse?.classList.contains('show') && toggler) {
    toggler.click();
  }
}


  // Form submission
  onSubmit() {
    if (this.contactForm.valid) {
      this.formData = this.contactForm.value;
      console.log(this.formData);


      this.sc.saveDetails(this.formData).subscribe((response) => {
        console.log(response);
      })

 // Clear form inputs by resetting the form
      this.contactForm.reset();

      // Optionally mark the form as pristine and untouched to clear validation states
      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();

       this.ns.showNotification('Message Sent!', 'success');

      // console.log('Feedback Received:', this.contactForm.value);
      // Process the form data
    } else {

      this.contactForm.markAllAsTouched();
        this.ns.showNotification('Kindly fill all vali fields', 'error');
      // Mark all controls as touched to trigger validation
    }
  }
}
