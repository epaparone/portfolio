'use strict';

$(document).ready(function() {
    //renderAboutMe();
    //$('.js-about-page').addClass('current');
    console.log('document loaded');



/* first Java section: create code snippets & assets for the DOM */

/*const projectData = [
    // creates project data array
    // use a const to store all of our project info in an array of objects with key/value pairs
    {
    name: 'Quiz App',
    work: 'Concept, Design, Development',
    image: 'ADD IMAGE HERE',
    descripton: 'AstroQuiz is a Buzzfeed-style quiz app that prompts users to answer a series of astrology quiz questions and provides feedback tailored to their performance. It provides a mobile-friendly, accessible UI using DOM manipulation.',
    tech_icon: ['html-icon', 'css-icon', 'java-icon'],
    tech_alt: ['html', 'css', 'javascript']
    }
];

function aboutMePage() {
    // creates About Me page
    // stores the html for the about me page
    return `
        <!-- image will go here <img> -->
        <div class='h3-wrap'>
            <h3 class='page-title'>About Me</h3>
        </div>
        <article class='bio-body'>
            <p>
                I am a web developer growing my depth and breadth of skills as a Bloc Web Development Track bootcamp student. 
                I’m a front-end enthusiast at my core. I love the process of taking a beautifully rendered but static design, 
                breaking it down into its elements, and rebuilding that puzzle out of code to create an impactful user experience. 
                I believe in using tech to increase social good – to use this incredible power and knowledge in our fingertips 
                to empower nonprofits, social enterprises, and businesses to achieve their missions and better their communities.
            </p>
            <p>
                Often I can be found coding or designing next to an ever-present cup of coffee. When I’m not, you’ll find me 
                talking business strategy with my cofounder of Wolf & Wing Creative, seeking out a new adventure on a hike, 
                or exploring a new city. A lifelong learner, I always have a project. Aside from coding, my current learning 
                projects are hand lettering and the science behind good cooking.
            </p>
        </article>`
};

function projectsPage() {
    // creates Project page
    // stores the html for the project page -- NOT the actual project data
    return `
    <!-- image will go here <img> -->
    <div class='h3-wrap'>
        <h3 class='page-title'>Projects</h3>
    </div>
    <section class='project-list'>
        <section class='project-item'>
            <h4>Quiz App</h4>
            <h5>Concept, Design, Development</h5>
            <!-- image will go here <img> -->
            <p class='project-description'>
                    AstroQuiz is a Buzzfeed-style quiz app that prompts users to answer a series of astrology quiz questions 
                    and provides feedback tailored to their performance. It provides a mobile-friendly, accessible UI using 
                    DOM manipulation. 
            </p>
            <ul class='tech-used'>
                <li><!--icon here-->HTML5</li>
                <li><!--icon here-->CSS3</li>
                <li><!--icon here-->JavaScript</li>
            </ul>
            <button type='submit' class='project-function' name='Live Site'>Live</button>
            <button type='submit' class='project-function' name='Site Repo'>Repo</button>
        </section>
    </section> `
};

function contactPage() {
    // creates Contact page
    // stores html for the contact pageyt`45
    return `
        <div class='h3-wrap'>
            <h3 class='page-title'>Contact</h3>
        </div>
        <p>Currently seeking a full time junior developer role.</p>
        <ul class='contact-list'>
            <li><a href='.link'>Email</a></li>
            <li><a href='.link'>LinkedIn</a></li>
            <li><a href='.link'>GitHub</a></li>
            <li><a href='.link'>W&W</a></li>
        </ul>`
};*/


/* this group of functions edits & amends the previous group w/ jQuery */
/*function renderAboutMe() {
    // adds code to about me section
    $('.js-about-page').html(aboutMePage());
};

function renderProjects() {
    // adds code to the projects section
    $('.js-projects-page').html(projectsPage());
    
};

function renderContact() {
    // adds code to the projects section
    $('.js-contact-page').html(contactPage());
};*/

/* this group of functions enacts everything using event listeners */

/*function runAboutMe() {
    // shows about me on click on nav button
    
};

function runProjects() {
    // shows projects on click on nav button
    
};

function runContact() {
    // shows contact page on click on nav button
    
};*/

// these functions handle the hide/current CSS DOM manipulation

// these hide the sections using the 'hide' class
function showAboutMe() {
    $('.js-about-page').toggleClass('hide').toggleClass('current');
};

function showProjects() {
    $('.js-projects-page').toggleClass('hide').toggleClass('current');
};

function showContact() {
    $('.js-contact-page').toggleClass('hide').toggleClass('current');
};

// these hide when sections have the current class
function hideAboutMe() {
    if ($('.js-about-page').hasClass('current') === true) {
        $('.js-about-page').toggleClass('hide').toggleClass('current');
    };
};

function hideProjects() {
    if ($('.js-projects-page').hasClass('current') === true) {
        $('.js-projects-page').toggleClass('hide').toggleClass('current');
    };
};

function hideContact() {
    if ($('.js-contact-page').hasClass('current') === true) {
        $('.js-contact-page').toggleClass('hide').toggleClass('current');
    };
};

function handleHideSections() {
    hideAboutMe();
    hideProjects();
    hideContact();
    console.log('hide sections working');
};

// these functions manipulate the DOM on clicks on the nav
function runAboutMe() {
    $('#js-about-nav').click(function() {
        handleHideSections();
        showAboutMe();
        console.log('show about me');
    });
};

function runProjects() {
    $('#js-projects-nav').click(function() {
        handleHideSections();
        showProjects();
        console.log('show projects');
    });
};

function runContact() {
    $('#js-contact-nav').click(function() {
        handleHideSections();
        showContact();
        console.log('show contact');
    });
};

/* links everything together */
function handlePortfolio() {
    runAboutMe();
    runProjects();
    runContact();
    console.log('run portfolio');
};
 
handlePortfolio();
});