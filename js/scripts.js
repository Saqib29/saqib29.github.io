/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



const projects1 = [
    {
        "title": "Pizza App",
        "description": "Developed in Express.js and Database is used MongoDB. Socket.io for realtime status update.Developed Realtime Pizza order App in Nodejs.",
        "image": "./assets/snippets/pizza.png",
        "source": "https://github.com/Saqib29/Pizza-App_expressJS_mongoDB",
        "tools": "Express.js, MongoDB, Socket.io"
    },
    {
        "title": "Pharmacy Management System",
        "description": "Developed in .NET, Database Microsoft Sql server was used",
        "image": "./assets/snippets/home.png",
        "source": "https://github.com/Saqib29/PharmacyManagementSystem",
        "tools": ".NET, Microsoft Sql server"
    },
    {
        "title": "E-Commerce Website",
        "description": "Simple E-commerce Website developed in Laravel and database was used MySQL",
        "image": "./assets/snippets/eCommerce.png",
        "source": "https://github.com/Saqib29/eCommerce-Laravel",
        "tools": "Laravel, MySQL"
    },
    {
        "title": "Food Recipe App",
        "description": "Developed in React Js",
        "image": "./assets/snippets/food-reacipe.png",
        "source": "https://github.com/Saqib29/food-recipe-app-in-react",
        "tools": "React Js"
    },
    {
        "title": "Weather Finder",
        "description": "Developed in Node Js Searched Data fetched with weather API",
        "image": "./assets/snippets/Search-Weather.png",
        "source": "https://github.com/Saqib29/weather-finder",
        "tools": "Express, Node.js, weather API"
    },
    {
        "title": "Mrkdown Blog Article",
        "description": "Developed in Node Js and Database used MongoDB",
        "image": "./assets/snippets/blog_article.PNG",
        "source": "https://github.com/Saqib29/markdown_blog",
        "tools": "Express, Node.js, MongoDB"
    },
    {
        "title": "News Website",
        "description": "Simple News Website Developed in Node Js worked with API",
        "image": "./assets/snippets/news-site.PNG",
        "source": "https://github.com/Saqib29/News-Website",
        "tools": "Express, Node.js, API"
    },
    {
        "title": "Chat Room App",
        "description": "Simple ChatRoom App Developed in Node Js",
        "image": "./assets/snippets/chatRoom.PNG",
        "source": "https://github.com/Saqib29/chat_rooms",
        "tools": "NodeJs"
    },
    {
        "title": "djangonauic",
        "description": "Developed in DjangoA simple blog site",
        "image": "./assets/snippets/home.png",
        "source": "https://github.com/Saqib29/django-nautic",
        "tools": "Django"
    },
    {
        "title": "Store Api",
        "description": "Developed in DjangoDeveloped REST API in Django using rest framework",
        "image": "./assets/snippets/rest_api_django.png",
        "source": "https://github.com/Saqib29/store-api",
        "tools": "Django, REST API"
    },
    // Add more projects for the first slider...
];

const projects2 = [
    {
        "title": "CrowdSourcing",
        "description": "Developed in Node Js and Database is used MySql. I did the Admin part of this project with my team.",
        "image": "./assets/snippets/nodejs.png",
        "source": "https://github.com/Saqib29/crowdsourcing",
        "tools": "Node Js, MySql"
    },
    {
        "title": "Freelancing Website",
        "description": "Developed in Laravel and database is used as MySql To know more details about this project please visit the source code link below.",
        "image": "./assets/snippets/laravel.png",
        "source": "https://github.com/Saqib29/crowdsourcing_laravel",
        "tools": "Laravel, MySql"
    },
    {
        "title": "Technician Finder",
        "description": "For backend PHP and database MySql. I did the frontend part of this project as a team member.",
        "image": "./assets/snippets/technician.jpg",
        "source": "https://github.com/Saqib29/technician",
        "tools": "PHP, MySql"
    },
    // Add more projects for the second slider...
];

function generateProjectCards(projects, sliderContainer) {
    projects.forEach(project => {
        // Create a div element for the card
        const card = document.createElement('div');
        card.classList.add('card');

        // Create an img element for the project image
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        img.classList.add('card-image');

        // Create an h3 element for the project title
        const title = document.createElement('h3');
        title.textContent = project.title;

        // Create a p element for the project description
        const description = document.createElement('p');
        description.textContent = project.description;

        // Create a p element for the tools used
        const tools = document.createElement('p');
        tools.textContent = `Tools: ${project.tools}`;
        tools.classList.add('card-tools');

        // Create an a element for the source code link
        const sourceLink = document.createElement('a');
        sourceLink.href = project.source;
        sourceLink.textContent = 'Source Code';
        sourceLink.target = '_blank';
        sourceLink.classList.add('source-link');

        // Append the image, title, description, tools, and source link to the card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(tools);
        card.appendChild(sourceLink);

        // Append the card to the slider container
        sliderContainer.appendChild(card);
    });
}

function setupSliderControls(sliderContainer, prevButton, nextButton) {
    const slider = sliderContainer.querySelector('.slider');
    let currentIndex = 0;
    const cardWidth = document.querySelector('.card').offsetWidth + 20; // Card width plus margin
    const totalCards = slider.querySelectorAll('.card').length;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    // Optional: Add mouse wheel support
    slider.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            nextButton.click();
        } else {
            prevButton.click();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const slider1Container = document.querySelectorAll('.slider-container')[0];
    const slider2Container = document.querySelectorAll('.slider-container')[1];

    // Generate cards for both sliders
    generateProjectCards(projects1, slider1Container.querySelector('.slider'));
    generateProjectCards(projects2, slider2Container.querySelector('.slider'));

    // Setup controls for both sliders
    setupSliderControls(slider1Container, slider1Container.querySelector('.prev'), slider1Container.querySelector('.next'));
    setupSliderControls(slider2Container, slider2Container.querySelector('.prev'), slider2Container.querySelector('.next'));
});





