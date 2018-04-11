import Resume from '../Models/Resume';
const experience: Resume = {
    background: '#264e59',
    category: 'Experience',
    items: [
        {
            company: 'NAVER Corp',
            position: 'FrontEnd Developer/Team Lead',
            date: 'Sep 2015 - Mar 2018',
            skill: 'React, Redux, TypeScript, AngularJS, jQuery, Handlebars, Node.js, Enzyme, Mocha, Webpack',
            details: [
                'Built the Front End for Web Service: Dashboard, Message Notification System to LINE Works customers, ECMS, and a lot of kind services.',
                'Lead the Web Service team by the Scrum Agile way.',
                'Do prototyping of Web Services in Front End and Back End for both regions: Korea and Japan.',
                'Architect Front End by React and Redux by MV* architecture, and do code review every day for keeping quality of source codes, and improve team ability by Test Driven way.',
                'Organization services between Development and Service team of Korea, Business and QA team of Japan, and my team of China using Chinese, Korean and English as a Team Lead.', 
            ]
        },
        {
            company: 'WIZCOZ',
            position: 'FullStack Developer',
            date: 'Apr 2012 - May 2014',
            skill: 'ASP.NET MVC3, Entity Framework 4.5, MSSQL, AngularJS 1.x, jQuery, KnockoutJS, Bootstrap',
            details: [
                'Developing Back End and Front End using ASP.NET MVC3 with MSSQL Code First, and KnockoutJS by MVVM styles.',
                'Improve of performance for a hundred thousand customers.',
                'Developing a web service for both languages: Korean and China.',
            ]
        },
    ]
};
const education: Resume = {
    background: '#500e4e',
    category: 'Education',
    items: [
        {
            company: 'Kwangwoon University',
            position: 'Master Degree of Game Studies, Education Games',
            date: 'Mar 2008 - Aug 2013',
            skill: 'Thesis: Web Server Performance Analysis Utilizing Node.js',
            details: [
                'Researching that performance of Node.js compare to common Back End technology: ASP.NET',
                'What is advantage of using Node.js',
                'What is benefit of using one language by JavaScript in three tier: Back End, Front End and Database',
            ]
        }
    ]
};
const community: Resume = {
    background: '#21b080',
    category: 'Community',
    items: [
        {
            company: 'Functional Reactive Framework Frontier Group',
            position: 'Manager',
            date: '2012 - 2014',
            details: [
                'Studied and led a group to practice Functional Programming with over 10 people each week.',
                'Introduce emerging technologies: TypeScript, Meteor, MongoDB, and etc.'
            ]
        }
    ]
};
export default {
    experience: experience,
    education: education,
    community: community,
};