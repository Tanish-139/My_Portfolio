import crefin from '/public/image/crefin.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Personal Portfolio Website',
        description: "This portfolio, built with Next.js, React, and styled using Tailwind CSS, showcases projects, skills, and experience with fast navigation and responsive design. Hosted on Netlify, it includes a contact form powered by Netlify Forms for easy visitor interaction, highlighting full-stack capabilities and a clean, professional presentation..",
        tools: ['React JS', 'Next JS', 'Tailwind CSS',],
        role: 'Solo Developer',
        code:'https://github.com/Tanish-139/My_Portfolio',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Billing Software',
        description: 'A billing software application developed using Java AWT and Swing, designed to streamline invoicing and payment processing. It features a user-friendly interface for entering product details, calculating totals, and generating invoices, enhancing efficiency and accuracy in billing operations.',
        tools: ["Java","AWT","Swing"],
        role: 'Solo Developer',
        code: 'https://github.com/Tanish-139/BillingSoftware',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'E-Commerce Website with Advance filtering',
        description: 'An advanced filtering e-commerce website allows users to refine product searches by criteria like price, brand, size, color, and ratings. With an intuitive interface, customers can easily filter and sort results in real-time, enhancing their shopping experience and improving conversion rates.',
        tools: ['React'],
        code: 'https://github.com/Tanish-139/E-commerce-website-advance-filtering-',
        role: 'Solo Developer',
        demo: '',
    },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // },
    // {
    //     id: 5,
    //     name: 'AI Powered Financial App',
    //     description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
    //     tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
    //     role: 'Backend Developer',
    //     code:'https://www.instagram.com/direct/t/7593315380711430/',
    //     demo: '',
    //     image: crefin,
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
