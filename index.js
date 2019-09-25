'use strict';

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
 
$(handlePortfolio)