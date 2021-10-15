import { IProject } from "./types";

export const Projects:IProject[]=[
    {
        name:"Covid-19 Tracker",
        description:`Built a mobile application to provide live status updates of the statistics related to the COVID-19 pandemic.Created the user interface using widgets to display global data and Indian states and districts daily data . Developed the application to fetch JSON data and implemented object modelling using Flutter framework.`,
        imageUrl:"/projects/p-11.jpeg",
        github_url:"url",
        category:["react"],
        tag:["Flutter","Dart","Mobile App","REST"]
    },{
        name:"Naukri Portal",
        description:`Web App where job seeker or Recruiter can login or sign up to a portal.Job seekers can apply for multiple jobs and recruiters can view those applications and post multiple jobs.Admin can login and see jobs posted by recruiters and list of candidate applied to particular job with CRUD functionality.Developed using React For frontend & Golang for backend.`,
        imageUrl:"/projects/p-22.jpeg",
        github_url:"url",
        category:["react"],
        tag:["GO","Backend","Rest","MySql","React"]
    },{
        name:"Pension Management",
        description:`Built a web application using ASP.NET CORE to provide the calculated pension amount based on pensioner Details.Deploy and consume different microservice to verify and calculate the pension amount.Used JWT Authentication and Authorisation for accessing Application.`,
        imageUrl:"/projects/p-33.jpeg",
        github_url:"url",
        category:["react"],
        tag:["Asp.net","MVC","Backend",".Net Core","SQL Server","Micro Services"]
    },{
        name:"News App",
        description:`Developed a news application using Flutter to fetch news based on different categories using rapid API call.Built a user friendly and interactive application based on the categories of the daily news.User can bookmark and save their favourite news.`,
        imageUrl:"/projects/p-44.jpeg",
        github_url:"url",
        category:["react"],
        tag:["Flutter","API","Dart"]
    },{
        name:"Claims Managment",
        description:"A web Application developed using ASP.NET(MVC) where a person can claim their request based on check given by bank. MS SQl Server used to store the data",
        imageUrl:"/projects/p-11.jpeg",
        github_url:"url",
        category:["react"],
        tag:["ASP",".Net","Rest","Backend","Entity Framework","SQL Server"]
    }
]