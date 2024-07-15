import { Component } from '@angular/core';
import { IService } from 'src/app/models/service.model';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services: IService[] = [
    {
      title: "Custom Web Development",
      description: "Development of responsive and optimized websites tailored to your specific needs. I utilize the latest technologies to ensure the best user experience and functionality.",
      shortDescription: "Responsive and optimized websites tailored to your needs.",
      imagePath: "../../../../../assets/img/service/web-development.png"
    },
    {
      title: "Mobile App Development",
      description: "Creation of native mobile applications for iOS and Android, tailored to your requirements. From conception to implementation and publication on app stores.",
      shortDescription: "Native mobile applications for iOS and Android.",
      imagePath: "../../../../../assets/img/service/mobile-development.png"
    },
    {
      title: "Software Architecture Consulting",
      description: "Detailed analysis of your existing software architecture and recommendations to optimize it in terms of performance, scalability, and maintainability.",
      shortDescription: "Analysis and recommendations for software architecture.",
      imagePath: "../../../../../assets/img/service/software-architecture.png"
    },
    {
      title: "Systems Integration and APIs",
      description: "Seamless integration of third-party systems and APIs to optimize your application's functionality and interoperability, ensuring efficient communication across platforms.",
      shortDescription: "Integration of systems and APIs for optimized functionality.",
      imagePath: "../../../../../assets/img/service/api.png"
    },
    {
      title: "Cloud Infrastructure",
      description: "Design, implementation, and management of scalable cloud infrastructures (AWS, Azure, Google Cloud) to ensure optimal performance, high availability, and cost efficiency.",
      shortDescription: "Design and management of scalable cloud infrastructures.",
      imagePath: "../../../../../assets/img/service/cloud.png"
    },
    {
      title: "Security Audits and Testing",
      description: "Conducting comprehensive security audits and rigorous testing to identify vulnerabilities and ensure your software is protected against potential threats.",
      shortDescription: "Comprehensive security audits and rigorous testing.",
      imagePath: "../../../../../assets/img/service/software-security.png"
    }
  ];
  ;
  

  constructor() { }
}
