import { Component } from '@angular/core';
import { IProject } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: IProject[] = [
    {
      id: 1,
      title: "QR Code Generator",
      description: "Discover our QR code generator tool, designed to transform any URL into a scannable QR code effortlessly. Input your link, and in just a few seconds, receive a unique QR code that simplifies sharing, tracking, and managing digital content. Ideal for businesses, events, or personal use, our tool requires no registration or sign-up—just paste your URL and generate your code instantly. Enhance your accessibility and streamline digital interactions with our reliable, easy-to-use QR code generator. Get started now and experience the convenience firsthand!",
      shortDescription: "Generate QR codes quickly with our easy-to-use web tool! Just enter your URL, and we’ll create a scannable QR code for you. Ideal for sharing links, tracking, and more. No sign-up required, paste your link and get your QR code instantly. Start generating now!",
      imagePath: [
        "../../../../../assets/img/projects/qr-code-generator/qr-code-generator-page.jpeg",
        "../../../../../assets/img/projects/qr-code-generator/qr-code-generator-result-page.jpeg"
      ],
      url: "https://waamir104.github.io/QR-Code-Generator/"
    },
    {
      id: 2,
      title: "Encrypter",
      description: "Secure your data with our advanced text encryption tool, designed to protect your sensitive information effortlessly. Simply input your text, choose from various encryption methods, and generate a secure, encrypted version with ease. Ideal for safeguarding personal or business data, ensuring confidentiality and integrity. Our tool is straightforward and requires no registration or login—just enter your text, select your encryption method, and encrypt. Enhance your digital security with our reliable, easy-to-use encryption service. Start protecting your data now!",
      shortDescription: "Encrypt your text securely with our easy-to-use encryption tool. Simply enter your text, select your encryption method, and generate a secure, encrypted version. Ideal for protecting sensitive information and ensuring privacy. No sign-up required—start encrypting now and keep your data safe!",
      imagePath: [
        "../../../../../assets/img/projects/encrypter/encrypter-page.jpeg",
        "../../../../../assets/img/projects/encrypter/encrypter-matrix-page.jpeg",
        "../../../../../assets/img/projects/encrypter/encrypter-result-page.jpeg"
      ],
      url: "https://waamir104.github.io/ENCRYPTER-Challenge-Oracle-ONE/"
    },
    {
      id: 3,
      title: "Censo - Form (CRUD)",
      description: "Our project aims to streamline the management of apprentices' personal information through a dedicated web application. Apprentices will have the ability to register their details via a user-friendly form, while administrators can oversee and manage records through a comprehensive CRUD (Create, Read, Update, Delete) panel. The application will feature a login page for administrators and ensure data accuracy with validation rules for input fields. All fields marked with an asterisk (*) are mandatory, and validations will be in place to accept only the appropriate types of data. This will help maintain accurate records and smooth data processing.",
      shortDescription: "This web application is being developed to manage apprentices' personal information. Apprentices can register their details, while administrators can view, update, delete, and manage records. The app includes a login page and a CRUD panel for admin use. Fields will be validated for correct data input.",
      imagePath: [
        "../../../../../assets/img/projects/censo-form/censo-form-page.jpeg"
      ],
      url: ""
    }
  ]
}
