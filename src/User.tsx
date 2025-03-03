import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Mihir Mehar",
    stack: ["Software Engineer", "Java SpringBoot Developer"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and Demonstrated expertise in crafting efficient, scalable solutions and a strong track record of problem-solving. Let's connect and create something amazing together!"
}


const ProjectInfo = [
    {
        title: "Smart Delivery Management System",
        desc: "Developed a comprehensive Smart Delivery Management System using Spring Boot and a microservices architecture. The platform streamlines last-mile delivery operations with real-time tracking, route optimization, and integrated payment processing. Automated logistics processes to enhance operational efficiency and data accuracy.",
        image: "Smart.png",
        live: false,
        technologies: ["Spring Boot", "Microservices", "Kubernetes", "REST APIs", "MySQL"],
        github: "https://github.com/MihirMehar/Smart-Delivery-Management-System"
    },
    {
        title: "Microservices Architecture for E-Commerce Platform",
        desc: "Designed and implemented a scalable microservices architecture for an e-commerce platform using Spring Boot, Eureka, and Zuul API Gateway. Integrated Kafka for real-time inventory updates, reducing data inconsistencies by 40%. Implemented a circuit breaker pattern with Hystrix to improve system resilience.",
        image: "microservice.png",
        live: false,
        technologies: ["Spring Boot", "Eureka", "Zuul", "Hystrix", "Kafka", "PostgreSQL"]
    },
    {
        title: "Task Management System",
        desc: "Built a full-stack Task Management System with Spring Boot and React.js, featuring role-based authentication. Developed REST APIs to efficiently handle CRUD operations, ensuring seamless user interactions. The frontend, developed using React.js, provides an intuitive and user-friendly interface.",
        image: "task.png",
        live: false,
        technologies: ["Spring Boot", "React.js", "JWT", "PostgreSQL"]
    },
    {
        title: "E-Commerce Application Using Angular & Spring Boot",
        desc: "Developed a full-fledged e-commerce application with Angular and Spring Boot. Implemented JWT-based authentication for secure user management. Built a seller dashboard for managing product listings and tracking sales, providing a smooth e-commerce experience for buyers and sellers.",
        image: "ecommerce.png",
        live: false,
        technologies: ["Angular", "Spring Boot", "JWT", "MySQL"],
        github: "https://github.com/MihirMehar/Angular_Ecom_website"
    }
];



const SkillInfo = [
    {
        title: "Programming Languages",
        skills: ["Java 8/11", "JavaScript", "PostgresSQL", "MySql Workbench", "C++", "TypeScript"]
        
    },
    {
        title: "Backend Frameworks",
        skills: ["Spring Boot", "Spring Cloud","Hibernate", "Express.js", "RESTful APIs"]
    },
    {
        title: "Frontend Frameworks",
        skills: ["React-JS", "Angular", "Thymeleaf", "Bootstrap", "Material-UI"]
    },

    {
        title: "Microservices & DEVOPS",
        skills: ["Docker", "Kubernetes", "Jenkins", "Git", "Github", "SonarQube", "AWS", "Eureka Server", "Vercel"]
    },
    {
        title: "Cloud & Tools",
        skills: ["Git", "Github", "Postman", "MongoDB Compass", "Spring Tool Suite", "InteliJ IDEA", "Visual Studio Code", "MySql Workbench"]
    }
]
const socialLinks = [
     { link: "https://github.com/MihirMehar", icon: IconBrandGithub },
     { link: "https://www.linkedin.com/in/mihir-mehar-27b4a9210", icon: IconBrandLinkedin },
     { link: "https://www.instagram.com/mihir_mehar27?igsh=MTVwY2Zja3ZucTQ5Yw==", icon: IconBrandInstagram }, 
     { link: "https://leetcode.com/u/Demon_2709", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "System Engineer",
        company: "Infosys Limited",
        date: "Nov 2022 - Present",
        location: "Pune, Maharashtra",
        desc: "Designed and developed scalable Spring Boot microservices, improving system efficiency by 25%. Optimized API performance by 30% through database query enhancements in MySQL and PostgreSQL. Led software security implementations using Spring Security and JWT. Automated CI/CD pipelines with Jenkins, streamlining deployments and increasing performance efficiency by 27%.",
        skills: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "MySQL", "Spring Security", "JWT", "React.js", "Docker", "Git", "Jenkins", "Python"]
    }
];

const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };